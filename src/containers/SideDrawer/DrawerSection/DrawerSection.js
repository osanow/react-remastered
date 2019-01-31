import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import classes from './DrawerSection.module.scss';

export const DrawerSection = (props) => {

    let content = [];

    if ( props.items.ordered )
        delete props.items.ordered
    if ( props.items.value )
        delete props.items.value

    const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

    for( let key in props.items ){

        let navItem;

        if ( typeof(props.items[key]) === "object" ){
            let sublist = [];
            for ( let sublistItem in props.items[key] ){
                if ( sublistItem !== "value" )
                    sublist.push(
                        <NavHashLink
                            key={sublistItem}
                            activeClassName={classes.active}
                            isActive={ () => props.currTopic === props.items[key][sublistItem] }
                            scroll={el => {
                                const distanceBetween = Math.abs(window.scrollY-el.offsetTop);
                                const scrollBehavior = width < 880 || distanceBetween > 3000 ? 'auto' : 'smooth';

                                return el.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
                            }}
                            onClick={props.onNavigateHandler}
                            to={ window.location.pathname + props.items[key][sublistItem] }>

                                <span className={classes.subtitle}> {sublistItem} </span>
                                <span className={classes.current}>    |   </span> <br/>

                        </NavHashLink>);

            }

            navItem = (
                <div key={props.items[key]['value']}>
                    <NavHashLink
                    activeClassName={classes.active}
                    isActive={ () => props.currTopic === props.items[key]['value'] }
                    scroll={el => {
                        const distanceBetween = Math.abs(window.scrollY-el.offsetTop);
                        const scrollBehavior = width < 800 || distanceBetween > 3000 ? 'auto' : 'smooth';

                        return el.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
                    }}
                    onClick={props.onNavigateHandler}
                    to={ window.location.pathname + props.items[key]['value'] }>
                        <span className={classes.subtitle}> {key} </span>
                        <span className={classes.current}>    |   </span> <br/>
                    </NavHashLink>
                    <ul>
                        { sublist }
                    </ul>
                </div>
            );
        }
        else
            navItem = (
                <NavLink key={props.items[key]} onClick={props.onNavigateHandler} activeClassName={classes.active} to={ "/" + props.subpage + "/" + props.items[key]}>
                    <span className={classes.subtitle}> {key} </span>
                    <span className={classes.current}>    |   </span>
                    <br/>
                </NavLink>
            );

        content.push( navItem );

        if (props.ordered)
            content[content.length-1] = <li key={key}>{content[content.length-1]}</li>;
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