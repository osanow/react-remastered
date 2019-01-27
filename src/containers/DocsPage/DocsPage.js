import React, { Component, Suspense, lazy} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';

import SideDrawer from '../SideDrawer/SideDrawer';
import styles from '../../shared/styles.module.scss';
import { docsSideLinks } from '../../data/data';
import DocsPageFooter from '../../components/DocsPageFooter/DocsPageFooter';
import Spinner from '../../components/UI/Spinner/Spinner';
import { refreshPosition } from '../../shared/utility';

class DocsPage extends Component {

    state = {
        currentRoute: null,
    }

    data = {
        subpageName: this.props.location.pathname.split('/')[1],
        links: null,
        routes: [],
        Pages: [],
    }

    componentWillMount(){
       this.data.links = JSON.parse(JSON.stringify(docsSideLinks));

       let counter = 0;
        for(let section in this.data.links){
            for(let name in this.data.links[section]){
                counter = counter+1;
                if ( this.props.location.pathname.includes(this.data.links[section][name]) )
                    this.setState({currentRoute: this.data.routes.length});

                let importPath = () => import('./Pages/' + this.data.links[section][name].replace('.html', '.js') );
                if ( counter > 4 )
                    importPath = () => import('../../components/NotFoundPage/NotFoundPage');

                this.data.Pages.push( lazy( importPath ) );

                let Page = this.data.Pages[ this.data.Pages.length-1 ];

                let title = this.toCapitalize(name);

                if ( !(name === "value" || name === "ordered") )
                    this.data.routes.push(<Route exact key={name} name={title} path={"/" + this.data.subpageName + "/" + this.data.links[section][name]} render={() => <> <Helmet title={title + " - React"} /> <Page title={title} /> </> } />);
            }
        }
    }

    componentDidMount(){
        setTimeout(() => {
            refreshPosition(this.props);
        }, 200);
    }

    componentWillUpdate(nextProps, nextState) {
        let counter = 0;
        for(let section in this.data.links){
            counter = 0;
            for(let name in this.data.links[section]){
                if ( nextProps.location.pathname.includes(this.data.links[section][name]) )
                    if ( counter !== this.state.currentRoute )
                        nextState.currentRoute = counter;
                counter++;
            }
        }
    }

    componentDidUpdate( prevProps ){
        refreshPosition( this.props ,prevProps );
    }

    toCapitalize = ( text ) => {
        const words = [ ...text.split( " " ) ];

        const newText = words.map( (val) => {
            return val.length > 2 ? val.charAt(0).toUpperCase() + val.substr(1) : val; 
        } )

        return newText.join(" ");
    }

    render() {
        return (
            <>
                <div className={styles.container} >
                    <div className={styles.PageStyles}>
                        <Switch>
                            <Redirect exact from={"/" + this.data.subpageName} to={this.data.routes[0].props.path} />
                            <Suspense fallback={<div style={{margin: 'auto', marginTop: '15rem', marginBottom: '80vh', textAlign: 'center'}}><Spinner /></div>}>
                                { this.data.routes }
                            </Suspense>
                            <Redirect to="/not-found" />
                        </Switch>
                    </div>
                </div>
                <DocsPageFooter prevArticle={this.data.routes[this.state.currentRoute - 1]} nextArticle={this.data.routes[this.state.currentRoute + 1]}  />
                <SideDrawer links={this.data.links} pathname={this.props.history.location.pathname} subpage={this.data.subpageName}/>
            </>
        );
    }
}

export default DocsPage;