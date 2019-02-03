import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';
import SyntaxHighlighter from '../../../components/UI/SyntaxHighlighter/SyntaxHighlighter';

const page = (props) => (
    <>
        <section>
            <h1>
                {props.title}
                <br />
                <p>
                    {props.date} by {props.author}
                </p>
            </h1>
            <p> Our latest release includes an important performance bugfix for <code>React.lazy</code>. Although there are no API changes,
                we’re releasing it as a minor instead of a patch. </p>
        </section>
        <hr />
        <section>
            <NavTitle id="why-is-this-bugfix-a-minor-instead-of-a-patch"><h2>Why Is This Bugfix a Minor Instead of a Patch?</h2></NavTitle>

            <p>React follows <Link to="/docs/faq-versioning.html">semantic versioning</Link>. Typically, this means that we use patch versions for bugfixes, and minors for new
            (non-breaking) features. However, we reserve the option to release minor versions even if they do not include new features.
            The motivation is to reserve patches for changes that have a very low chance of breaking. Patches are the most important type
            of release because they sometimes contain critical bugfixes. That means patch releases have a higher bar for reliability. It’s
            unacceptable for a patch to introduce additional bugs, because if people come to distrust patches, it compromises our ability
            to fix critical bugs when they arise — for example, to fix a security vulnerability.</p>

            <p>We never intend to ship bugs. React has a hard-earned reputation for stability, and we intend to keep it that way. We thoroughly
            test every version of React before releasing. This includes unit tests, generative (fuzzy) tests, integration tests, and internal
            dogfooding across tens of thousands of components. However, sometimes we make mistakes. That’s why, going forward, our policy will
            be that if a release contains non-trivial changes, we will bump the minor version, even if the external behavior is the same.
            We’ll also bump the minor when changing <code>unstable_</code>-prefixed APIs.</p>
        </section>
        <hr />
        <section>
            <NavTitle id="can-i-use-hooks-yet"><h2>Can I Use Hooks Yet?</h2></NavTitle>
            <p>Not yet, but soon!</p>

            <p>At React Conf, we said that 16.7 would be the first release to include Hooks. This was a mistake.
            We shouldn’t have attached a specific version number to an unreleased feature. We’ll avoid this in the future.</p>

            <p>Although 16.7 does not include Hooks, please do not infer anything about the timeline of the Hooks launch. Our plans for Hooks are unchanged:</p>

            <ul>
                <li>The <a href="https://github.com/reactjs/rfcs/pull/68" target="_blank" rel="noreferrer noopener">Hooks proposal</a> was accepted (<a href="https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884" rel="noreferrer noopener">with minor planned changes in response to feedback</a>).</li>
                <li>The <a href="https://github.com/facebook/react/commit/7bee9fbdd49aa5b9365a94b0ddf6db04bc1bf51c" rel="noreferrer noopener">implementation</a> was merged into the React repo (behind a feature flag).</li>
                <li>We’re currently in the testing phase, and you can expect a public release within a few months.</li>
            </ul>

            <p>We’ve heard from many people who want to start using Hooks in their apps. We also can’t wait to ship them!
            But because Hooks changes how we write React components, we are taking extra time to get the details right.
            We appreciate your patience as we prepare this exciting new feature for widespread, ahem, use.</p>

            <p>Learn more about <Link to="/blog/react-16-roadmap.html">our roadmap</Link> in our previous post.</p>
        </section>
        <hr />
        <section>
            <NavTitle id="installation"><h2>Installation</h2></NavTitle>
            <p>React v16.7.0 is available on the npm registry.</p>

            <p>To install React 16 with Yarn, run:</p>

            <SyntaxHighlighter code={`yarn add react@^16.7.0 react-dom@^16.7.0`} />
            <p>To install React 16 with npm, run:</p>

            <SyntaxHighlighter code={`npm install --save react@^16.7.0 react-dom@^16.7.0`} />
            <p>We also provide UMD builds of React via a CDN:</p>

            <SyntaxHighlighter code={`<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>`} />

            <p>Refer to the documentation for detailed installation instructions.</p>
        </section>
        <hr />
        <section>
            <NavTitle id="changelog"><h2>Changelog</h2></NavTitle>

            <NavTitle id="react-dom"><h3>React DOM</h3></NavTitle>
            <ul>
                <li>Fix performance of React.lazy for large numbers of lazily-loaded components. ({'@acdlite'} in #14429)</li>
                <li>Clear fields on unmount to avoid memory leaks. ({'@trueadm'} in #14276)</li>
                <li>Fix bug with SSR and context when mixing react-dom/server@16.6 and {'react@<16.6'}. ({'@gaearon'} in #14291)</li>
                <li>Fix a performance regression in profiling mode. ({'@bvaughn'} in #14383)</li>
            </ul>

            <NavTitle id="scheduler-experimental"><h3>Scheduler (Experimental)</h3></NavTitle>
            <ul>
                <li>Post to MessageChannel instead of window. (@acdlite in #14234)</li>
                <li>Reduce serialization overhead. (@developit in #14249)</li>
                <li>Fix fallback to setTimeout in testing environments. (@bvaughn in #14358)</li>
                <li>Add methods for debugging. (@mrkev in #14053)</li>
            </ul>
        </section>
    </>
);

export default page;