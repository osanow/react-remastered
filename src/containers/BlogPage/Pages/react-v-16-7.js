import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';
import SyntaxHighlighter from '../../../components/UI/SyntaxHighlighter/SyntaxHighlighter';

const page = ({ title }) => (
    <>
        <section>
            <h1> {title} </h1> <br/>December 19, 2018 by Andrew Clark
            <p> Use as little or as much React as you need. </p>
        </section>
        <hr />
    </>
);


export default page;