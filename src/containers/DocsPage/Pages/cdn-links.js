import React, {Suspense} from 'react';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';

const SyntaxHighlighter = React.lazy(() => import('../../../components/UI/SyntaxHighlighter/SyntaxHighlighter'));

const page = ({title}) => (
    <>
        <section>
            <h1> {title} </h1>
            <p> Both React and ReactDOM are available over a CDN. </p>

            <Suspense fallback={<h4 style={{margin: '10vh 20vw', textAlign: 'center'}}>Loading code example...</h4>}>
                <SyntaxHighlighter code={
`<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`
                }/>
            </Suspense>
            <p>The versions above are only meant for development, and are not suitable for production.
                Minified and optimized production versions of React are available at:</p>

            <Suspense fallback={<h4 style={{ margin: '10vh 20vw', textAlign: 'center' }}>Loading code example...</h4>}>
                <SyntaxHighlighter code={
`<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>`
                }/>
            </Suspense>
            <p>To load a specific version of react and react-dom, replace 16 with the version number.</p>

            <NavTitle id="why-the-crossorigin-attribute"><h3>Why the crossorigin Attribute?</h3></NavTitle>
            <p>If you serve React from a CDN, we recommend to keep the crossorigin attribute set:</p>

            <Suspense fallback={<h4 style={{ margin: '10vh 20vw', textAlign: 'center' }}>Loading code example...</h4>}>
                <SyntaxHighlighter code={`<script crossorigin src="..."></script>`} />
            </Suspense>

            <p>We also recommend to verify that the CDN you are using sets the <code>Access-Control-Allow-Origin: *</code> HTTP header.</p>
            <p>This enables a better error handling experience in React 16 and later.</p>

        </section>
        <hr />
    </>
);


export default page;