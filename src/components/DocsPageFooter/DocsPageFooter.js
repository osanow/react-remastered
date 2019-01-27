import React from 'react';
import { Link } from 'react-router-dom';

import classes from './DocsPageFooter.module.scss';

const DocsPageFooter = (props) => (
    <div className={classes.DocsPageFooter}>
        <div className={classes.container}>
            <ul className={classes.links}>
                <li className={classes.link}>
                    { props.prevArticle ?
                        <>
                            <p className={classes.desc}>Previous article</p>
                            <Link to={props.prevArticle.props.path}>{props.prevArticle.props.name}</Link>
                        </> : null
                     }
                </li>
                <li className={classes.link}>
                    { props.nextArticle ?
                        <>
                            <p className={classes.desc}>Next article</p>
                            <Link to={props.nextArticle.props.path}>{props.nextArticle.props.name}</Link>
                        </> : null
                    }
                </li>
            </ul>
        </div>
    </div>
);


export default DocsPageFooter;