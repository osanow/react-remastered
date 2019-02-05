import React, { Component, Suspense } from 'react';
import Helmet from 'react-helmet';

import classes from './MainPage.module.scss';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import MainPageFooter from '../../components/MainPageFooter/MainPageFooter';
import { refreshPosition } from '../../shared/utility';

const LiveEditor = React.lazy(() => import('../../components/UI/LiveEditor/LiveEditor'));

class MainPage extends Component{

    componentDidMount(){
        setTimeout(() => {
            refreshPosition(this.props);
        }, 200);
    }

    componentDidUpdate( prevProps ){
        refreshPosition( this.props, prevProps );
    }

   render() {
        return (
            <>
                <Helmet title="React - A JavaScript library for building user interfaces" />
                <MainPageHeader />
                <main className={classes.MainPage}>
                    <section className={classes.Advantages}>
                            <div className={classes.Advantage}>
                                <h3 className={classes.title}> Declarative </h3>
                                <p> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. </p>
                                <p> Declarative views make your code more predictable and easier to debug. </p>
                            </div>

                            <div className={classes.Advantage}>
                                <h3 className={classes.title}> Component-Based </h3>
                                <p> Build encapsulated components that manage their own state, then compose them to make complex UIs. </p>
                                <p> Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. </p>
                            </div>

                            <div className={classes.Advantage}>
                                <h3 className={classes.title}> Learn Once, Write Anywhere </h3>
                                <p> We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. </p>
                                <p> React can also render on the server using Node and power mobile apps using <a href="https://facebook.github.io/react-native/" target="_blank" rel="noopener noreferrer">React Native</a>. </p>
                            </div>
                    </section>
                    <hr/>
                    <section>
                        <div className={classes.box}>
                            <div className={classes.desc}>
                                <h3>A Simple Component</h3>

                                <p>React components implement a <code>render()</code> method that takes input data and returns what to display.
                                This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed
                                by <code>render()</code> via <code>this.props</code>.</p>
                                <br/>
                                <p><strong>JSX is optional and not required to use React.</strong> Try the <a href="https://babeljs.io/repl/#?presets=react" target="_blank" rel="noopener noreferrer">Babel REPL</a> to
                                see the raw JavaScript code produced by the JSX compilation step.</p>
                            </div>

                            <Suspense fallback={<h4 style={{margin: '25vh 30vw'}}>Loading live JSX editor...</h4>}>
                                <LiveEditor codeExample='simple' />
                            </Suspense>
                        </div>

                        <div className={classes.box}>
                            <div className={classes.desc}>
                                <h3>A Stateful Component</h3>

                                <p>In addition to taking input data (accessed via <code>this.props</code>), a component can maintain internal state data (accessed via <code>this.state</code>.
                                When a component’s state data changes, the rendered markup will be updated by re-invoking <code>render()</code>.</p>
                            </div>

                            <Suspense fallback={<h4 style={{ margin: '25vh 30vw' }}>Loading live JSX editor...</h4>}>
                                <LiveEditor codeExample='stateful' />
                            </Suspense>
                        </div>

                        <div className={classes.box}>
                            <div className={classes.desc}>
                                <h3>An Application</h3>

                                <p>Using <code>props</code> and <code>state</code>, we can put together a small Todo application. This example uses <code>state</code> to track the current list of items as well
                                as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented
                                using event delegation.</p>
                            </div>

                            <Suspense fallback={<h4 style={{ margin: '25vh 30vw' }}>Loading live JSX editor...</h4>}>
                                <LiveEditor codeExample='application' />
                            </Suspense>
                        </div>

                        <div className={classes.box}>
                            <div className={classes.desc}>
                                <h3>A Component Using External Plugins</h3>

                                <p>React is flexible and provides hooks that allow you to interface with other libraries and frameworks.
                                This example uses <strong>remarkable</strong>, an external Markdown library, to convert the <code>{"<textarea>"}</code>’s value in real time.</p>
                            </div>

                            <Suspense fallback={<h4 style={{ margin: '25vh 30vw' }}>Loading live JSX editor...</h4>}>
                                <LiveEditor codeExample='external' />
                            </Suspense>
                        </div>
                    </section>
                </main>
                <MainPageFooter />
            </>
        );
    }
}

export default MainPage;