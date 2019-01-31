import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import classes from './AuthBar.module.scss';

library.add(faUser);

const AuthBar = () => {
    return (
        <nav className={classes.AuthBar}>
            <Link to="/">     Log in      </Link>
            <Link to="/">    Sign in     </Link>
            <button className={classes.AuthIcon}>
                <FontAwesomeIcon icon="user" />
            </button>
        </nav>
    );
}

export default AuthBar;