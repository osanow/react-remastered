import React from 'react';
import ResultItem from './ResultItem/ResultItem';

import classes from './ResultSection.module.scss';

const ResultSection = ({data, title}) => {

    const resultItems = data.map( (el, index) => {
        return <ResultItem key={el.title + index} data={el} prevTitle={ index > 0 ? data[index-1].title : ""} />
    })

    return (
        <div className={classes.ResultSection}>
            <div className={classes.title}>
                <p>{title.toUpperCase()}</p>
            </div>
            <ul className={classes.results}>
                {resultItems}
            </ul>
        </div>
    );
}

export default ResultSection;