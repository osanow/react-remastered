import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';

const page = ({title}) => (
    <>
        <section>
            <h1> {title} </h1>
            <p> This page is an overview of the React documentation and related resources. </p>
            <p><strong>React</strong> is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
        </section>
        <hr />
        <section>
            <ul>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#try-react"> try react </HashLink> </li>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#learn-react"> learn react </HashLink> </li>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#staying-informated"> staying informated </HashLink> </li>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#versioned-documentation"> versioned documentation </HashLink> </li>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#something-missing"> something missing </HashLink> </li>
            </ul>
        </section>
        <hr />
        <section>
            <NavTitle id="try-react"><h2>Try React</h2></NavTitle>
            <p>React has been designed from the start for gradual adoption, and <strong>you can use as little or as much React as you need.</strong>
                Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app,
                the links in this section will help you get started.</p>

            <NavTitle id="online-playgrounds"><h3>Online Playgrounds</h3></NavTitle>
            <p>If you’re interested in playing around with React, you can use an online code playground.
                Try a Hello World template on CodePen or CodeSandbox.</p>
            <p>If you prefer to use your own text editor, you can
                also <a href="https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html" target="_blank" rel="noopener noreferrer">download
                this HTML file</a>, edit it, and open it from the local filesystem in
                your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>

            <NavTitle id="add-react-to-a-website"><h3>Add React to a Website</h3></NavTitle>
            <p>You can <Link to="/docs/add-react-to-a-website.html">add React to an HTML page in one minute</Link>.
            You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.   </p>

            <NavTitle id="create-a-new-react-app"><h3>Create a New React App</h3></NavTitle>
            <p>When starting a React project, <Link to="/docs/add-react-to-a-website.html">a simple HTML page with script tags</Link> might still be the best option.
             It only takes a minute to set up!</p>
            <p>As your application grows, you might want to consider a more integrated setup. There are <Link to="/docs/create-a-new-react-app.html">several JavaScript toolchains</Link> we recommend
             for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem.</p>
        </section>
        <hr/>
        <section>
            <NavTitle id="learn-react"><h2>Learn React</h2></NavTitle>
            <p>People come to React from different backgrounds and with different learning styles.
            Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.</p>
            <br/>
            <ul>
                <li> If you prefer to <strong>learn by doing</strong>, start with our <Link to="/tutorial/tutorial.html">practical tutorial.</Link> </li>
                <li> If you prefer to <strong>learn concepts step by step</strong>, start with our guide to <Link to="/docs/hello-world.html">main concepts.</Link></li>
            </ul>
            <br/>
            <p>Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you <i>will</i> get the hang of it.</p>

            <NavTitle id="first-examples"><h3>First Examples</h3></NavTitle>
            <p>The <Link to="/">React homepage</Link> contains a few small React examples with a live editor. Even if you don’t know anything about React
            yet, try changing their code and see how it affects the result.  </p>

            <NavTitle id="react-for-beginners"><h3>React for Beginners</h3></NavTitle>
            <p>If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out <a rel="noopener noreferrer" href="https://www.taniarascia.com/getting-started-with-react/" target="_blank">this overview
            of React by Tania Rascia</a>. It introduces the most important React concepts in a detailed, beginner-friendly way.
            Once you’re done, give the documentation another try!</p>

            <NavTitle id="react-for-designers"><h3>React for Designers</h3></NavTitle>
            <p>If you’re coming from a design background, <a href="http://reactfordesigners.com/" target="_blank" rel="noopener noreferrer">these resources</a> are a great place to get started.</p>

            <NavTitle id="javascript-resources"><h3>JavaScript Resources</h3></NavTitle>
            <p>The React documentation assumes some familiarity with programming in the JavaScript language.
            You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.</p>
            <p>We recommend going through <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" target="_blank" rel="noopener noreferrer">this JavaScript overview</a> to check your knowledge level. It will take you between 30 minutes
            and an hour but you will feel more confident learning React.</p>

            <blockquote>
                <h3>Tip</h3> <br/>
                Whenever you get confused by something in JavaScript, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN</a> and <a href="http://javascript.info/" target="_blank" rel="noopener noreferrer">javascript.info</a> are great websites to check.
                There are also <Link to="/community/support.html">community support</Link> forums where you can ask for help.
            </blockquote>

            <NavTitle id="practical-tutorial"><h3>Practical Tutorial</h3></NavTitle>
            <p>If you prefer to <strong>learn by doing</strong>, check out our <Link to="/tutorial/tutorial.html">practical tutorial</Link>. In this tutorial, we build a tic-tac-toe
                game in React. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques
                you’ll learn in the tutorial are fundamental to building <i>any</i> React apps, and mastering it will give you a much deeper understanding.</p>

            <NavTitle id="step-by-step-guide"><h3>Step-by-Step Guide</h3></NavTitle>
            <p>If you prefer to <strong>learn concepts step by step</strong>, our <Link to="/docs/hello-world.html">guide to main concepts</Link> is the best place to start.
                Every next chapter in it builds on the knowledge introduced in the previous chapters so you won’t miss anything as you go along.</p>

            <NavTitle id="thinking-in-react"><h3>Thinking in React</h3></NavTitle>
            <p>Many React users credit reading <Link to="/docs/thinking-in-react.html">Thinking in React</Link> as the moment React finally “clicked” for them.
                It’s probably the oldest React walkthrough but it’s still just as relevant.</p>

            <NavTitle id="recommended-curses"><h3>Recommended Courses</h3></NavTitle>
            <p>Sometimes people find third-party books and video courses more helpful than the official documentation.
                We maintain <Link to="/community/courses.html">a list of commonly recommended resources</Link>, some of which are free.</p>

            <NavTitle id="advanced-concepts"><h3>Advanced Concepts</h3></NavTitle>
            <p>Once you’re comfortable with the <Link to="/docs/getting-started.html#main-concepts">main concepts</Link> and played with React a little bit, you might be interested
                in more advanced topics. This section will introduce you to the powerful, but less commonly used React features like <Link to="/docs/context.html">context</Link> and <Link to="/docs/refs-and-the-dom.html">refs</Link>.</p>

            <NavTitle id="api-reference"><h3>API Reference</h3></NavTitle>
            <p>This documentation section is useful when you want to learn more details about a particular React API.
                For example, <Link to="/docs/react-component.html">React.Component API reference</Link> can provide you with details on how <code>setState()</code>
                works, and what different lifecycle methods are useful for.</p>

            <NavTitle id="glossary-and-faq"><h3>Glossary and FAQ</h3></NavTitle>
            <p>The glossary contains an overview of the most common terms you’ll see in the React documentation.
                There is also a FAQ section dedicated to short questions and answers about common topics, including making
                AJAX requests, component state, and file structure.</p>
        </section>
        <hr/>
        <section>
            <NavTitle id="staying-informated"><h2>Staying Informed</h2></NavTitle>

            <p>The <Link to="/blog/">React blog</Link> is the official source for the updates from the React team. Anything important,
                including release notes or deprecation notices, will be posted there first.</p>
            <p>You can also follow the <a href="https://twitter.com/reactjs" target="_blank" rel="noopener noreferrer">@reactjs account</a> on Twitter, but you won’t miss anything essential if you only read the blog.</p>
            <p>Not every React release deserves its own blog post, but you can find a detailed changelog for every
                release <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">in the CHANGELOG.md file in the React repository</a>, as well as on the <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">Releases</a> page.</p>
        </section>
        <hr/>
        <section>
        <NavTitle id="versioned-documentation"><h2>Versioned Documentation</h2></NavTitle>
            <p>This documentation always reflects the latest stable version of React. Since React 16, you can find older
            versions of the documentation <Link to="/versions">on a separate page</Link>. Note that documentation for past versions is snapshotted
            at the time of the release, and isn’t being continuously updated.</p>
        </section>
        <hr/>
        <section>
        <NavTitle id="something-missing"><h2>Something Missing?</h2></NavTitle>
            <p>If something is missing in the documentation or if you found some part confusing, please <a href="https://github.com/reactjs/reactjs.org/issues/new">file an
            issue for the documentation repository</a> with your suggestions for improvement, or tweet at the <a href="https://twitter.com/reactjs" rel="noopener noreferrer">@reactjs account</a>. We love hearing from you!</p>
        </section>
    </>
);


export default page;