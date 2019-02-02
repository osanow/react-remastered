import React from 'react';
import { Link } from 'react-router-dom';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';
import SyntaxHighlighter from '../../../components/UI/SyntaxHighlighter/SyntaxHighlighter';

const page = ({title}) => (
    <>
        <section>
            <h1> {title} </h1>
            <p> Use an integrated toolchain for the best user and developer experience. </p>
            <p>This page describes a few popular React toolchains which help with tasks like:</p>
            <br/>
            <ul>
                <li>Scaling to many files and components.</li>
                <li>Using third-party libraries from npm.</li>
                <li>Detecting common mistakes early.</li>
                <li>Live-editing CSS and JS in development.</li>
                <li>Optimizing the output for production.</li>
            </ul>
            <p>The toolchains recommended on this page <strong>don’t require configuration to get started</strong>.</p>
        </section>
        <hr />
        <section>

            <NavTitle id="you-might-not-need-a-toolchain"><h2>You Might Not Need a Toolchain</h2></NavTitle>
            <p>If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet,
                consider <Link to="/docs/add-react-to-a-website.html">adding React as a plain {'<script>'} tag on an HTML page</Link>,
                optionally with <Link to="/docs/add-react-to-a-website.html#optional-try-react-with-jsx">JSX</Link>.</p>

            <p>This is also <strong>the easiest way to integrate React into an existing website</strong>. You can always add a larger toolchain if you find it helpful!</p>
        </section>
        <hr />
        <section>
            <NavTitle id="recommended-toolchains"><h2>Recommended Toolchains</h2></NavTitle>
            <p>The React team primarily recommends these solutions:</p>

            <ul>
                <li>If you’re <strong>learning React</strong> or <strong>creating a new <Link to="/docs/glossary.html#single-page-application">single-page app</Link>,</strong> use <Link to="/docs/create-a-new-react-app.html#create-react-app">Create React App</Link>.</li>
                <li>If you’re building a <strong>server-rendered website with Node.js,</strong> try <Link to="/docs/create-a-new-react-app.html#nextjs">Next.js</Link>.</li>
                <li>If you’re building a <strong>static content-oriented website,</strong> try <Link to="/docs/create-a-new-react-app.html#gatsby">Gatsby</Link>.</li>
                <li>If you’re building a <strong>component library</strong> or <strong> integrating with an existing codebase,</strong> try <Link to="/docs/create-a-new-react-app.html#more-flexible-toolchains">More Flexible Toolchains</Link>.</li>
            </ul>

            <NavTitle id="create-react-app"><h3>Create React App</h3></NavTitle>
            <p><a target="_blank" rel="noopener noreferrer" href="http://github.com/facebookincubator/create-react-app">Create React App</a> is a comfortable environment for <strong>learning React</strong>, and is the best way
                to start building <strong>a new single-page application</strong> in React.</p>

            <p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience,
                and optimizes your app for production. You’ll need to have Node >= 6 and npm >= 5.2 on your machine. To create a project, run:</p>

            <SyntaxHighlighter code={`npx create-react-app my-app
cd my-app
npm start`} />
            <blockquote>
                <h3>Note</h3><br/>
                npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+.
            </blockquote>
            <p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline,
                so you can use it with any backend you want. Under the hood, it uses <a target="_blank" rel="noopener noreferrer" href="http://babeljs.io/">Babel</a> and <a target="_blank" rel="noopener noreferrer" href="https://webpack.js.org/">webpack</a>, but you don’t need to know anything about them.</p>
            <p>When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the
                build folder. You can learn more about Create React App <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app#create-react-app-">from its README</a> and the <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">User Guide</a>.</p>

            <NavTitle id="nextjs"><h3>Next.js</h3></NavTitle>
            <p><a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">Next.js</a> is a popular and lightweight framework for <strong>static and server‑rendered applications</strong> built with React.
                It includes <strong>styling and routing solutions</strong> out of the box, and assumes that you’re using <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">Node.js</a> as the server environment.</p>

            <p>Learn Next.js from <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/learn/">its official guide</a>.</p>

            <NavTitle id="gatsby"><h3>Gatsby</h3></NavTitle>
            <p><a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/">Gatsby</a> is the best way to create <strong>static websites</strong> with React. It lets you use React components, but outputs
                pre-rendered HTML and CSS to guarantee the fastest load time.</p>
            <p>Learn Gatsby from <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/docs/">its official guide</a> and a <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/docs/gatsby-starters/">gallery of starter kits</a>.</p>

            <NavTitle id="more-flexible-toolchains"><h3>More Flexible Toolchains</h3></NavTitle>
            <p>The following toolchains offer more flexiblity and choice. We recommend them to more experienced users:</p>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://neutrinojs.org/"><strong>Neutrino</strong></a> combines the power of <a target="_blank" rel="noopener noreferrer" href="https://webpack.js.org/">webpack</a> with the simplicity of presets, and includes a preset for <a target="_blank" rel="noopener noreferrer" href="https://neutrinojs.org/packages/react/">React apps</a> and <a target="_blank" rel="noopener noreferrer" href="https://neutrinojs.org/packages/react-components/">React components</a>.</li>

                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/insin/nwb"><strong>nwb</strong></a> is particularly great for <a target="_blank" rel="noopener noreferrer" href="https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb">publishing React components for npm</a>. It <a target="_blank" rel="noopener noreferrer" href="https://github.com/insin/nwb/blob/master/docs/guides/ReactApps.md#developing-react-apps-with-nwb">can be used</a> for creating React apps, too.</li>

                <li><a target="_blank" rel="noopener noreferrer" href="https://parceljs.org/"><strong>Parcel</strong></a> is a fast, zero configuration web application bundler that <a target="_blank" rel="noopener noreferrer" href="https://parceljs.org/recipes.html#react">works with React</a>.</li>

                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/jaredpalmer/razzle"><strong>Razzle</strong></a> is a server-rendering framework that doesn’t require any configuration, but offers more flexibility than Next.js.</li>
            </ul>
        </section>
        <hr/>
        <section>
            <NavTitle id="creating-a-toolchain-from-scratch"><h2>Creating a Toolchain from Scratch</h2></NavTitle>
            <p>A JavaScript build toolchain typically consists of:</p>
            <ul>
                A <strong>package manager</strong>, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.

                A <strong>bundler</strong>, such as webpack or Parcel. It lets you write modular code and bundle it together into small packages to optimize load time.

                A <strong>compiler</strong> such as Babel. It lets you write modern JavaScript code that still works in older browsers.
            </ul>

            <p>If you prefer to set up your own JavaScript toolchain from scratch, <a target="_blank" rel="noopener noreferrer" href="https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658">check out this guide</a> that re-creates some of the Create React App functionality.</p>

            <p>Don’t forget to ensure your custom toolchain <Link to="/docs/optimizing-performance.html#use-the-production-build">is correctly set up for production</Link>.</p>
        </section>
    </>
);


export default page;