import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';

const tutorial = (props) => (
    <>
        <Helmet title={props.title + " - React"} />

        <section>
            <h1> Tutorial: Intro to React </h1>
            <p> This tutorial doesn’t assume any existing React knowledge. </p>
        </section>
        <hr />
        <section>
            <NavTitle id="before-we-start-the-tutorial"><h2>Before We Start the Tutorial</h2></NavTitle>

            <p>We will build a small game during this tutorial. <strong>You might be tempted to skip it because you’re 
                not building games — but give it a chance.</strong> The techniques you’ll learn in the tutorial are fundamental to 
                building any React apps, and mastering it will give you a deep understanding of React.    </p>

            <blockquote>
                <h3>Tip</h3> <br/>
                This tutorial is designed for people who prefer to <strong>learn by doing</strong>. 
                If you prefer learning concepts from the ground up, check out our <Link to="/docs/hello-world.html">step-by-step guide</Link>. 
                You might find this tutorial and the guide complementary to each other.
            </blockquote>

            The tutorial is divided into several sections:

            <ul>
                <li><Link to="#setup-for-the-tutorial">Setup for the Tutorial</Link> will give you <strong>a starting point</strong> to follow the tutorial.</li>
                <li><Link to="#overview">Overview</Link> will teach you <strong>the fundamentals</strong> of React: components, props, and state.</li>
                <li><Link to="#completing-the-game">Completing the Game</Link> will teach you <strong>the most common techniques</strong> in React development.</li>
                <li><Link to="#adding-time-travel">Adding Time Travel</Link> will give you <strong>a deeper insight</strong> into the unique strengths of React.</li>
            </ul>

            <p> You don’t have to complete all of the sections at once to get the value out of this tutorial. 
                Try to get as far as you can — even if it’s one or two sections. </p>
            <br/>
            <p> It’s fine to copy and paste code as you’re following along the tutorial, but we recommend to type it by hand. 
                This will help you develop a muscle memory and a stronger understanding. </p>

            <NavTitle id="what-are-we-building"><h3>What Are We Building?</h3></NavTitle>
            <p>In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.</p>
            <br/>
            <p>You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if 
            you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.</p>
            <br/>
            <p>We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features 
            that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history 
            of all of the moves that have occurred in the game, and is updated as the game progresses.</p>
            <br/>
            <p>You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this 
            tutorial. Our next step is to set you up so that you can start building the game.</p>

            <NavTitle id="prerequisites"><h3>Prerequisites</h3></NavTitle>
            <p>We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if
            you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts 
            like functions, objects, arrays, and to a lesser extent, classes.</p>
            <br/>
            <p>If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some features from 
            ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. 
            You can use the Babel REPL to check what ES6 code compiles to.</p>

        </section>
    </>
);

export default tutorial;