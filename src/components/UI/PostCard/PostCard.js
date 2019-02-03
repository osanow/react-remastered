import React from 'react';
import { Link } from 'react-router-dom';

import { dateFormat } from '../../../shared/utility';
import classes from './PostCard.module.scss';

const PostCard = ({data}) => {

    return (
        <li className={classes.card}>
            <Link to={`/blog/${data.url}`}>
                <div>
                    <p className={classes.name}>{data.name}</p>
                </div>
                <div>
                    <h5 className={classes.date}>{dateFormat(data.time)}</h5>
                    <p className={classes.author}> by {data.author} </p>
                </div>
            </Link>
        </li>
    );
}

export default PostCard;