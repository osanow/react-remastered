import React from 'react';
import ResultItem from './ResultItem/ResultItem';

const ResultSection = ({data, title}) => {

    const resultItems = data.map( (el, index) => {
        return <ResultItem key={el.title + index} data={el} />
    })

    return (
        <div>
            <div>
                <p>{title.toUpperCase()}</p>
            </div>
            <ul>
                {resultItems}
            </ul>
        </div>
    );
}

export default ResultSection;