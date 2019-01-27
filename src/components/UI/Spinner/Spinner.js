import React from 'react';

import classes from './Spinner.module.scss';

const Spinner = () => (
    <div>
        <div className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    </div>);

export default Spinner;