import React from 'react';

const ResultItem = ({data}) => {

    console.log(data);

    return (
        <li>
            <div> { data.title ? data.title : data.subpage } </div>
            <div>
                <h4>{data._highlightResult.subtitle.matchLevel === "none" ? data.subtitle : <p dangerouslySetInnerHTML={{__html: data._highlightResult.subtitle.value}}></p> }</h4>
                <div>{data._snippetResult.content.matchLevel === "none" ? data.content : <p dangerouslySetInnerHTML={{ __html: data._snippetResult.content.value }}></p>}</div>
            </div>
        </li>
    );
}

export default ResultItem;