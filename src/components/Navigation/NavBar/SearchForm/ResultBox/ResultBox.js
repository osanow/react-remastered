import React from 'react';

import classes from './ResultBox.module.scss';
import ResultSection from './ResultSection/ResultSection';

const ResultBox = ({results, query}) => {
    const resultSections = {};

    console.log(results);
    results.forEach( result => {
        if ( resultSections[result.subpage] )
            resultSections[result.subpage].push( { ...result } );
        else
            resultSections[result.subpage] = [ { ...result } ]
    } );

    let content = <p>No results found for query "{query}" </p>;

    if ( results.length > 0 ){
        content = [];
        for (let result in resultSections){
            content.push(<ResultSection key={result} data={resultSections[result]} title={result} />);
        }
    }
    console.log(resultSections);

    return (
        <div className={classes.ResultBox}>
            <div className={classes.Results}>
                { content }
            </div>
            <div className={classes.Brand}>
                <h5>Search by Algolia</h5>
            </div>
        </div>
    );
}

export default ResultBox;