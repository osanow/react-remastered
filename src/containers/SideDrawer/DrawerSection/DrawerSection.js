import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import classes from './DrawerSection.module.scss';

export const DrawerSection = (props) => {

    let content = [];

    if ( props.items.ordered )
        delete props.items.ordered
    if ( props.items.value )
        delete props.items.value

    const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

    for( let item in props.items ){
        let navItem;

        if ( typeof(props.items[item]) === "object" && !props.items[item].url ){
            let nestedItems = [];
            for ( let nestedItem in props.items[item] ){
                if (nestedItem !== "value" )
                    nestedItems.push(
                        <NavHashLink
                            key={nestedItem}
                            activeClassName={classes.active}
                            isActive={ () => props.currTopic === props.items[item][nestedItem] }
                            scroll={el => {
                                const distanceBetween = Math.abs(window.scrollY-el.offsetTop);
                                const scrollBehavior = width < 880 || distanceBetween > 3000 ? 'auto' : 'smooth';

                                return el.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
                            }}
                            onClick={props.onNavigateHandler}
                            to={ window.location.pathname + props.items[item][nestedItem] }>

                                <span className={classes.subtitle}> {nestedItem} </span>
                                <span className={classes.current}>    |   </span> <br/>

                        </NavHashLink>);

            }

            navItem = (
                <div key={props.items[item]['value']}>
                    <NavHashLink
                    activeClassName={classes.active}
                    isActive={ () => props.currTopic === props.items[item]['value'] }
                    scroll={el => {
                        const distanceBetween = Math.abs(window.scrollY-el.offsetTop);
                        const scrollBehavior = width < 800 || distanceBetween > 3000 ? 'auto' : 'smooth';

                        return el.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
                    }}
                    onClick={props.onNavigateHandler}
                    to={ window.location.pathname + props.items[item]['value'] }>
                        <span className={classes.subtitle}> {item} </span>
                        <span className={classes.current}>    |   </span> <br/>
                    </NavHashLink>
                    <ul>
                        { nestedItems }
                    </ul>
                </div>
            );
        }
        else {
            let url = ( props.items[item].url ? props.items[item].url : props.items[item] );
            navItem = (
                <NavLink key={url} onClick={props.onNavigateHandler} activeClassName={classes.active} to={`/${props.subpage}/${url}`}>
                    <span className={classes.subtitle}> {item} </span>
                    <span className={classes.current}>    |   </span>
                    <br />
                </NavLink>
            );

        }

        if ( props.subpage === 'blog' && content.length > 9 ){
            break;
        }

        content.push( navItem );

        if (props.ordered)
            content[content.length-1] = <li key={item}>{content[content.length-1]}</li>;
    }

    let titleClasses = [classes.title];
    if (props.isActive)
        titleClasses = [...titleClasses, classes.active].join(" ");

    let links = (
        <div className={classes.links}>
            {content}
        </div> );

    if ( props.ordered )
        links = (
            <ol className={classes.links}>
                {content}
            </ol> );

    return (
        <section className={classes.DrawerSection}>
            <button className={titleClasses} id={ props.id } onClick={(el) => props.toggleSectionHandler(el,classes.active)}>
                {props.title}
                <span className={classes.arrow}> <FontAwesomeIcon icon="angle-down" /> </span>
            </button>
            {links}
        </section>
    );
}
export default React.memo(DrawerSection);