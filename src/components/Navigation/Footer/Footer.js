import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Footer.module.scss';
import FooterSection from './FooterSection/FooterSection';
import Link from '../../UI/Link/Link';
import { footerLinks } from '../../../data/data';

library.add(faExternalLinkAlt);

const Footer = (props) => {

    let content = [];
    const links = JSON.parse(JSON.stringify(footerLinks));

    for(let key in links){

        let order = links[key].order;
        delete links[key].order;
        links[key] = Object.values(links[key]);

        content.push((
            <FooterSection title={key.toUpperCase()} key={key} order={order}>
                {links[key].map((value, index) => {
                    return <Link key={key+index} to={value.path}> {value.name} </Link>;
                })}
            </FooterSection>
        ))
    }

    const footerClassnames = [ classes.Footer ];
    if ( props.drawerOpened ){
        footerClassnames.push( classes.shrink );
    }

    return (
        <footer className={ footerClassnames.join(" ") }> 
            <div className={classes.container}>
                <section className={classes.Box}>
                    {  content  }
                </section>
                <section className={classes.copy}>
                    <p> No Copyright &copy; in here :) </p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;