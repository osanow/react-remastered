import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './NavTitle.module.scss';

const NavTitle = (props) => {
    return (
        <div id={props.id} className={classes.linkContainer}>
            {props.children}
            <a href={"#"+props.id} className={classes.linkIcon}><FontAwesomeIcon icon="link" /></a>
        </div>
    );
}

export default NavTitle;