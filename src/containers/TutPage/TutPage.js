import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SideDrawer from '../SideDrawer/SideDrawer';
import styles from '../../shared/styles.module.scss';
import { tutSideLinks } from '../../data/data';
import Spinner from '../../components/UI/Spinner/Spinner';
import { refreshPosition, toCapitalize } from '../../shared/utility';

class TutPage extends Component {

    state = {
        currentTopic: null,
    }

    data = {
        subpageName: this.props.location.pathname.split('/')[1],
        links: null,
        routes: [],
        Pages: [],
        navTitles: [],
    }

    componentWillMount() {
        if ( this.props.location.hash )
            this.setState({currentTopic: this.props.location.hash});

       this.data.links = JSON.parse(JSON.stringify(tutSideLinks));

        for(let section in this.data.links){
            let url = ( this.data.links[section]['value'] ? this.data.links[section]['value'] : this.data.links[section] );

            this.data.Pages.push( lazy( () => import('./Pages/' + url.replace('.html', '.js') ) ) );
            let Page = this.data.Pages[ this.data.Pages.length-1 ];

            let title = toCapitalize(section);

            this.data.routes.push(<Route exact key={section} name={title} path={"/" + this.data.subpageName + "/" + url} render={() => <Page title={title} />} />);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandler);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScrollHandler);
        setTimeout(() => {
            for(let section in this.data.links){
                for(let sectionItem in this.data.links[section]){
                    if (sectionItem !== "value"){
                        if ( typeof(this.data.links[section][sectionItem]) === "object" ){
                            for(let subItem in this.data.links[section][sectionItem] ){
                                let navTitle = document.getElementById(this.data.links[section][sectionItem][subItem].replace("#",""));
                                if (navTitle)
                                    this.data.navTitles.push( {
                                        id: this.data.links[section][sectionItem][subItem],
                                        offTop: navTitle.offsetTop,
                                    } );
                            }
                        }
                        else{
                            let navTitle = document.getElementById( this.data.links[section][sectionItem].replace("#","") );
                            if (navTitle)
                                this.data.navTitles.push( {
                                    id: this.data.links[section][sectionItem],
                                    offTop: navTitle.offsetTop,
                                } );
                        }
                    }
                }
            }
            refreshPosition(this.props);
        }, 500);
    }

    onScrollHandler = () => {
        if ( !this.data.navTitles[0] )
            return;

        let prevTitle = null;
        for(let title of this.data.navTitles){
            if ( window.scrollY < title.offTop-5 ){
                if ( prevTitle === null && this.state.currentTopic !== null )
                    this.setState({currentTopic: null});
                else if ( prevTitle !== null && this.state.currentTopic !== prevTitle.id )
                    this.setState({currentTopic: prevTitle.id});
                return;
            }
            else
                prevTitle = title;
        }
        if ( prevTitle !== null && this.state.currentTopic !== prevTitle.id )
            this.setState({currentTopic: prevTitle.id});
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
                <SideDrawer
                links={this.data.links}
                pathname={this.props.history.location.pathname}
                currTopic={this.state.currentTopic}
                subpage={this.data.subpageName} />
            </>
        );
    }
}

export default TutPage;