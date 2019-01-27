import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Link.module.scss';

const link = (props) => {

    let content;
    if ( !props.to.includes('http') )
        content = (<Link to={props.to}> {props.children} </Link>);
    else
        content = (<a href={props.to} target="_blank" rel="noopener noreferrer">{props.children}<FontAwesomeIcon icon="external-link-alt" /></a>) ;

    return (
        <i className={classes.Link}>
            {content}
        </i>
    )
}

export default link;