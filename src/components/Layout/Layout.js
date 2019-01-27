import React from 'react';

import classes from './Layout.module.scss';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = ({children}) => (
    <>
        <NavBar />
        <div className={classes.Layout}>
            {children}
        </div>
        <Footer drawerOpened={ window.location.pathname === "/" || window.location.pathname === "/not-found" ? false : true } />
    </>
);

export default Layout;