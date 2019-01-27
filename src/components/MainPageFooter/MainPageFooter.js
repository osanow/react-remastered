import React from 'react';

import Button from '../UI/Button/Button';
import classes from './MainPageFooter.module.scss';

const MainFooter = () => (
    <div className={classes.MainFooter}>
        <nav className={classes.box}>
            <Button highlighted to="https://reactjs.org/docs/getting-started.html">Get Started</Button>
            <Button to="https://reactjs.org/tutorial/tutorial.html">Take the Tutorial</Button>
        </nav>
    </div>
);

export default React.memo(MainFooter);