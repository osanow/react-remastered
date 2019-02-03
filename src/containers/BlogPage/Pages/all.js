import React from 'react';

import classes from './all.module.scss';
import PostCard from '../../../components/UI/PostCard/PostCard';

const page = ({links, title}) => {

    const cards = [];
    for ( let section in links ){
        for ( let card in links[section] ){
            if ( !card.includes("All") )
                cards.push(<PostCard key={card} data={{...links[section][card], name: card}} /> );
        }
    }

    return (
        <>
            <h1 className={classes.title}>{title}</h1>
            <hr/>
            <ul className={classes.postsList}>
                {cards}
            </ul>
        </>
    );
}

export default page;