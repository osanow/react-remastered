import React, { Component, Suspense } from 'react';
import { Switch,  Redirect } from 'react-router-dom';

import SideDrawer from '../SideDrawer/SideDrawer';
import styles from '../../shared/styles.module.scss';
import { communitySideLinks } from '../../data/data';
import Spinner from '../../components/UI/Spinner/Spinner';
import { refreshPosition, initPageRouting, getCurrentRoute } from '../../shared/utility';

class DocsPage extends Component {

    state = {
        currentRoute: null,
    }

    data = {
        subpageName: this.props.location.pathname.split('/')[1],
        links: null,
        routes: [],
    }

    componentWillMount() {
        this.data.links = JSON.parse(JSON.stringify(communitySideLinks));

        let currentRoute;
        [this.data.routes, currentRoute] = initPageRouting(this.data.links, this.props.location.pathname, this.data.subpageName, 'BlogPage', 1);

        this.setState({ currentRoute: currentRoute });
    }

    componentDidMount() {
        setTimeout(() => {
            refreshPosition(this.props);
        }, 200);
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.currentRoute = getCurrentRoute(this.data.links, nextProps.location.pathname);
    }

    componentDidUpdate(prevProps) {
        refreshPosition(this.props, prevProps);
    }

    render() {
        return (
            <>
                <div className={styles.container} >
                    <div className={styles.PageStyles}>
                        <Switch>
                            <Redirect exact from={"/" + this.data.subpageName} to={this.data.routes[0].props.path} />
                            <Suspense fallback={<div style={{ margin: 'auto', marginTop: '15rem', marginBottom: '100vh', textAlign: 'center' }}><Spinner /></div>}>
                                {this.data.routes}
                            </Suspense>
                            <Redirect to="/not-found" />
                        </Switch>
                    </div>
                </div>
                <SideDrawer links={this.data.links} pathname={this.props.history.location.pathname} subpage={this.data.subpageName} />
            </>
        );
    }
}

export default DocsPage;