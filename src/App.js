import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faAngleDown, faAngleUp, faLink } from '@fortawesome/free-solid-svg-icons';

import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import DocsPage from './containers/DocsPage/DocsPage';
import TutPage from './containers/TutPage/TutPage';
import CommunityPage from './containers/CommunityPage/CommunityPage';
import BlogPage from './containers/BlogPage/BlogPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

library.add(faChevronRight,faAngleDown,faAngleUp,faLink);

const app = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/docs" component={DocsPage} />
        <Route path="/tutorial" component={TutPage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default app;
