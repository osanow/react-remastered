import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ResultItem.module.scss';

const ResultItem = ({data, prevTitle}) => {

    const convertTextToPath = (text) => {
        text = text.toLowerCase();
        text = text.replace(":", "");
        const words = text.split(" ");
        return words.join('-');
    }

    let content = data._snippetResult.content.matchLevel === "none" || data._highlightResult.subtitle.matchLevel !== "none" ?
        null : <p className={classes.content} dangerouslySetInnerHTML={{ __html: "..." + data._snippetResult.content.value + "..." }}></p>;

    const path = `/docs/${convertTextToPath(data.subpage)}.html#${data.subtitle ? convertTextToPath(data.subtitle) : convertTextToPath(data.title)}`;

    return (
        <li>
            <Link className={classes.ResultItem} to={path}>
                <div className={classes.title}>
                    { prevTitle === data.title ? null : ( data.title ? data.title : data.subpage ) }
                </div>
                <div className={classes.desc}>
                    {data._highlightResult.subtitle.matchLevel === "none" ? <p className={classes.subtitle}> {(data.subtitle || data.title || data.subpage)} </p> : <p className={classes.subtitle} dangerouslySetInnerHTML={{__html: data._highlightResult.subtitle.value}}></p> }
                    { content }
                </div>
            </Link>
        </li>
    );
}

export default ResultItem;