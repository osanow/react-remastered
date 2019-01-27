import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';
import SyntaxHighlighter from '../../../components/UI/SyntaxHighlighter/SyntaxHighlighter';

const page = (props) => (
    <>
        <section>
            <h1> {props.title} </h1>
            <p> Use as little or as much React as you need. </p>
            <p>React has been designed from the start for gradual adoption, and <strong>you can use as little or as much React as
                you need. </strong> Perhaps you only want to add some “sprinkles of interactivity” to an existing page. React components are a great way to do that.</p>
            <br/>
            <p>The majority of websites aren’t, and don’t need to be, single-page apps. With <strong>a few lines of code</strong> and no build tooling, 
                try React in a small part of your website. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.</p>
        </section>
        <hr />
        <section>
            <ul>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#add-react-in-one-minute"> Add React in One Minute </HashLink> </li>
                <li> <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#optional-try-react-with-jsx"> Optional: Try React with JSX (no bundler necessary!) </HashLink> </li>
            </ul>
        </section>
        <hr />
        <section>
            <NavTitle id="add-react-in-one-minute"><h2>Add React in One Minute</h2></NavTitle>
            <p>In this section, we will show how to add a React component to an existing HTML page. 
                You can follow along with your own website, or create an empty HTML file to practice.</p>
            <p>There will be no complicated tools or install requirements — <strong>to complete this section,
                 you only need an internet connection, and a minute of your time</strong>.</p>
            <p>Optional: <a href="https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip" target="_blank" rel="noopener noreferrer">
            Download the full example (2KB zipped)</a></p>

            <NavTitle id="step-1-add-a-dom-container-to-the-html"><h3>Step 1: Add a DOM Container to the HTML</h3></NavTitle>
            First, open the HTML page you want to edit. Add an empty <code>{"<div>"}</code> tag to mark the spot where you want to display something with React. For example:

            <Suspense fallback={<h2>Loading code example...</h2>}>
                <SyntaxHighlighter code={`<!-- ... existing HTML ... -->

<div id="like_button_container"></div>

<!-- ... existing HTML ... -->`} />
            </Suspense>

            <p>We gave this <code>{"<div>"}</code> a unique <code>id</code> HTML attribute. This will allow us to find it from the
                 JavaScript code later and display a React component inside of it.</p>

            <blockquote>
                <h3>Tip</h3><br/>
                You can place a “container” <code>{"<div>"}</code> like this <strong>anywhere</strong> inside the <code>{"<body>"}</code> tag. 
                You may have as many independent DOM containers on one page as you need. They are usually empty — React will replace any
                existing content inside DOM containers.
            </blockquote>

            <NavTitle id="step-2-add-the-script-tags"><h3>Step 2: Add the Script Tags</h3></NavTitle>
            <p>Next, add three <code>{"<script>"}</code> tags to the HTML page right before the closing <code>{"</body>"}</code> tag:</p>

            <Suspense fallback={<h3>Loading code example...</h3>}>
                <SyntaxHighlighter code={`<!-- ... other HTML ... -->

<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<!-- Load our React component. -->
<script src="like_button.js"></script>

</body>`} />
            </Suspense>
            <p>The first two tags load React. The third one will load your component code.</p>

            <NavTitle id="step-3-create-a-react-domponent"><h3>Step 3: Create a React Component</h3></NavTitle>
            <p>Create a file called <code>like_button.js</code> next to your HTML page.</p>
            <p>Open <a href="https://cdn.rawgit.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js" target="_blank" rel="noopener noreferrer"><strong>this 
                starter code</strong></a> and paste it into the file you created.</p>

            <blockquote>
                <h3>Tip</h3><br/>
                This code defines a React component called LikeButton. Don’t worry if you don’t understand it yet — we’ll 
                cover the building blocks of React later in our hands-on tutorial and main concepts guide. For now, let’s just get it showing on the screen!
            </blockquote>

            <p>After <a href="https://cdn.rawgit.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js" target="_blank" rel="noopener noreferrer"><strong>the starter code</strong></a>, add two lines to the bottom of <code>like_button.js</code>:</p>
            
            <Suspense fallback={<h2>Loading code example...</h2>}>
                <SyntaxHighlighter code={` // ... the starter code you pasted ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);`} />
            </Suspense>

            <p>These two lines of code find the <code>{"<div>"}</code> we added to our HTML in the first step, and then display our “Like” button React component inside of it.</p>

            <NavTitle id="thats-it"><h3>That’s It!</h3></NavTitle>
            <p>There is no step four. <strong>You have just added the first React component to your website</strong>.</p>
            <p>Check out the next sections for more tips on integrating React.</p>
            <a href="https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605" target="_blank" rel="noopener noreferrer"><strong>View the full example source code</strong></a>
            <a href="https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip" target="_blank" rel="noopener noreferrer"><strong>Download the full example (2KB zipped)</strong></a>

            <NavTitle id="tip-refuse-a-component"><h3>Tip: Reuse a Component</h3></NavTitle>
            <p>Commonly, you might want to display React components in multiple places on the HTML page. 
                Here is an example that displays the “Like” button three times and passes some data to it:</p>
            <a href="https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda" target="_blank" rel="noopener noreferrer">View the full example source code</a>
            <a href="https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip" target="_blank" rel="noopener noreferrer">Download the full example (2KB zipped)</a>

            <blockquote>
                <h3>Note</h3><br/>
                This strategy is mostly useful while React-powered parts of the page are isolated from each other. Inside React code, it’s easier to use component composition instead.
            </blockquote>

            <NavTitle id="tip-minify-javascript-for-production"><h3>Tip: Minify JavaScript for Production</h3></NavTitle>
            <p>Before deploying your website to production, be mindful that unminifed JavaScript can significantly slow down the page for your users.</p>   
            <p>If you already minify the application scripts, <strong>your site will be production-ready</strong> if you 
            ensure that the deployed HTML loads the versions of React ending in <code>production.min.js</code>:</p>
            <SyntaxHighlighter code={`<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin ></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin ></script>`} />
            <p>If you don’t have a minification step for your scripts, <a href="https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3" target="_blank" rel="noopener noreferrer">here’s one way to set it up</a>.</p>
        </section>
        <hr/>
        <section>
            <NavTitle id="optional-try-react-with-jsx"><h2>Optional: Try React with JSX</h2></NavTitle>
            <p>In the examples above, we only relied on features that are natively supported by the browsers. 
                This is why we used a JavaScript function call to tell React what to display:</p>

            <Suspense fallback={<h2>Loading code example...</h2>}>
                <SyntaxHighlighter code={`const e = React.createElement;
 //Display a "Like" <button>
return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
);`} />
            </Suspense>     
            <p>However, React also offers an option to use JSX instead:</p>
            <Suspense fallback={<h2>Loading code example...</h2>}>
                <SyntaxHighlighter code={` // Display a "Like" <button>
return (
    <button onClick={() => this.setState({ liked: true })}>
        Like
    </button>
);`} />
        </Suspense>
            <p>These two code snippets are equivalent. While <strong>JSX is <Link to="">completely optional</Link></strong>, many people find it helpful for writing UI code — both with React and with other libraries.</p>
            <p>You can play with JSX using <a target="_blank" rel="noopener noreferrer" href="http://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Cstage-3&prettier=true&targets=Node-6.12&version=6.26.0&envVersion=">this online converter</a>.</p>

            <NavTitle id="quickly-try-jsx"><h3>Quickly Try JSX</h3></NavTitle>
            <p>The quickest way to try JSX in your project is to add this {'<script>'} tag to your page:</p>

            <SyntaxHighlighter code={`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`} />
            <p>Now you can use JSX in any <code>{`<script>`}</code> tag by adding <code>type="text/babel"</code> attribute to it. Here is <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html">an example 
                HTML file with JSX</a> that you can download and play with.</p>
            <p>This approach is fine for learning and creating simple demos. However, it makes your website slow and <strong>isn’t 
                suitable for production</strong>. When you’re ready to move forward, remove this new <code>{`<script>`}</code> tag and the <code>type="text/babel"</code>
                attributes you’ve added. Instead, in the next section you will set up a JSX preprocessor to convert all your <code>{`<script>`}</code> tags automatically.</p>

            <NavTitle id="add-jsx-to-a-project"><h3>Add JSX to a Project</h3></NavTitle>
            <p>Adding JSX to a project doesn’t require complicated tools like a bundler or a development server. Essentially,
                adding JSX <strong>is a lot like adding a CSS preprocessor</strong>. The only requirement is to have <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">Node.js</a> installed on your computer.</p>

            <p>Go to your project folder in the terminal, and paste these two commands:</p>
            <ol>
                <li><p><strong>Step 1:</strong> Run <code>npm init -y</code> (if it fails, <a target="_blank" rel="noopener noreferrer" href="https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d">here’s a fix</a>)</p></li>
                <li><p><strong>Step 2:</strong> Run <code>npm install babel-cli@6 babel-preset-react-app@3</code></p></li>
            </ol>
            <blockquote>
                <h3>Tip</h3><br/>
                We’re using npm here only to install the JSX preprocessor; you won’t need it for anything else. 
                Both React and the application code can stay as {'<script>'} tags with no changes.
            </blockquote>
            <p>Congratulations! You just added a production-ready JSX setup to your project.</p>

            <NavTitle id="rut-jsx-preprocessor"><h3>Run JSX Preprocessor</h3></NavTitle>
            <p>Create a folder called src and run this terminal command:</p>

            <SyntaxHighlighter code={'npx babel --watch src --out-dir . --presets react-app/prod'} />
            <blockquote>
                <h3>Note</h3><br/>
                npx is not a typo — it’s a <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b">package runner tool that comes with npm 5.2+</a>.
                <br/>
                If you see an error message saying “You have mistakenly installed the babel package”, you might have missed
                <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="#add-jsx-to-a-project">the previous step</HashLink>. Perform it in the same folder, and then try again.
            </blockquote> 


            <p>Don’t wait for it to finish — this command starts an automated watcher for JSX.</p>

            <p>If you now create a file called <code>src/like_button.js</code> with this JSX starter code, the watcher will create a preprocessed 
                <code>like_button.js</code> with the plain JavaScript code suitable for the browser. When you edit the source file with JSX, the transform will re-run automatically.</p>

            <p>As a bonus, this also lets you use modern JavaScript syntax features like classes without worrying about 
                breaking older browsers. The tool we just used is called Babel, and you can learn more about it from <a target="_blank" rel="noopener noreferrer" href="http://babeljs.io/docs/en/babel-cli/">its documentation</a>.</p>

            <p>If you notice that you’re getting comfortable with build tools and want them to do more for you, 
                the <Link to="/docs/create-a-new-react-app.html">next section</Link> describes some of the most popular and approachable toolchains. If not — those script tags will do just fine!</p>
        </section>
    </>
);


export default page;