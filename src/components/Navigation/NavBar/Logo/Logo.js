import React from 'react';
import { Link } from 'react-router-dom';

import brand from '../../../../assets/logo.svg';
import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={classes.Logo}>
            <img src={brand} alt="logo" />
            <p className={classes.brand} >  React   </p>
        </Link>
    );
}

export default Logo;