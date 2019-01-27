import React from 'react';

import NavItems from './NavItems/NavItems';
import classes from './NavBar.module.scss';
import Logo from './Logo/Logo';
import SearchForm from './SearchForm/SearchForm';
import AuthBar from './AuthBar/AuthBar';

const NavBar = () => {
    return (
        <header className={classes.NavBar}>
            <div className={classes.NavContainer}>
                <Logo />
                <NavItems />
                <SearchForm />
                <AuthBar />
            </div>
        </header>
    );
}

export default NavBar;