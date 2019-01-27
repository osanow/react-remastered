import React from 'react';

import classes from './FooterSection.module.scss';

const FooterSection = (props) => (
    <section className={classes.section} style={
        props.order ? { order: props.order } : null
    }>
        <h4 className={classes.subtitle}>
            {props.title}
        </h4>
        <nav className={classes.links}>
            {props.children}
        </nav>
    </section>
);

export default FooterSection;