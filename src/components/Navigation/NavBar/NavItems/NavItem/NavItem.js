import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavItem.module.scss';

const NavItem = (props) => {

    let linkClasses = classes.NavItem;
    if (window.location.pathname.includes(props.subpage))
        linkClasses += " " + classes.active

    return (
        <Link to={props.to} className={linkClasses}> 
            {props.children} 
        </Link>
    );
};

export default NavItem;