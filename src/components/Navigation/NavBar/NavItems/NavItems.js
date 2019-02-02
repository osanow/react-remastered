import React from 'react';

import classes from './NavItems.module.scss';
import NavItem from './NavItem/NavItem';

const NavItems = () => {
    return (
        <nav className={classes.NavItems}>
            <NavItem to="/docs/getting-started.html" subpage="/docs/"> Docs </NavItem>
            <NavItem to="/tutorial/tutorial.html" subpage="/tutorial/"> Tutorial </NavItem>
            <NavItem to="/community/support.html" subpage="/community/"> Community </NavItem>
            <NavItem to="/blog" subpage="/blog/>"> Blog </NavItem>
        </nav>
    );
}

export default NavItems;