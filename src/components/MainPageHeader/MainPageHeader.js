import React from 'react';

import Button from '../UI/Button/Button';
import classes from './MainPageHeader.module.scss';

const MainHeader = () => {
    return (
        <div className={classes.MainHeader}>
            <div className={classes.container}>
                <h1 className={classes.title}>React</h1>
                <p className={classes.desc}>A JavaScript library for building user interfaces</p>
                <nav className={classes.box}>
                    <Button highlighted to="https://reactjs.org/docs/getting-started.html">Get Started</Button>
                    <Button to="https://reactjs.org/tutorial/tutorial.html">Take the Tutorial</Button>
                </nav>
            </div>
        </div>
    );
}

export default React.memo(MainHeader);