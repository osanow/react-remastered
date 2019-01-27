import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {

    let classList = classes.Button;
    if( props.highlighted )
        classList = [ classes.Button, classes.highlighted ].join(' ');

    return (
        <button
            disabled={props.disabled}
            className={ classList }
            onClick={props.onClick}>
            
            { props.to ? <Link to={props.to}> {props.children} </Link> : props.children }
            {!props.highlighted ? <FontAwesomeIcon icon="chevron-right" /> : null}

        </button>
    )
}

export default Button;