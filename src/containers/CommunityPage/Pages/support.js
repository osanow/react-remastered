import React from 'react';
import { Link } from 'react-router-dom';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';

const page = () => (
    <>
        <section>
            <h1> Where to get Support </h1>
            <p> React has a community of millions of developers. </p>
            <p> On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.</p>
        </section>
        <hr />
        <section>
            <NavTitle id="stack-overflow"><h2>Stack Overflow</h2></NavTitle>
            <p>Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error.
                Read through the <a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank" rel="noopener noreferrer">existing questions</a> tagged with <strong>reactjs</strong> or <a href="https://stackoverflow.com/questions/ask?tags=reactjs">ask your own!</a></p>
        </section>
        <hr />
        <section>
            <NavTitle id="popular-discussion-forums"><h2>Popular Discussion Forums</h2></NavTitle>
            <p>There are many online forums which are a great place for discussion about best practices and application architecture
                as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit.</p>

            <p>Each community consists of many thousands of React users.</p>

            <ul>
                <li><a href="https://dev.to/t/react" target="_blank" rel="noopener noreferrer">DEV’s React community</a></li>
                <li><a href="https://hashnode.com/n/reactjs" target="_blank" rel="noopener noreferrer">Hashnode’s React community</a></li>
                <li><a href="https://discord.gg/0ZcbPKXt5bZjGY5n" target="_blank" rel="noopener noreferrer">Reactiflux online chat</a></li>
                <li><a href="https://www.reddit.com/r/reactjs/" target="_blank" rel="noopener noreferrer">Reddit’s React community</a></li>
                <li><a href="https://spectrum.chat/react" target="_blank" rel="noopener noreferrer">Spectrum’s React community</a></li>
            </ul>
        </section>
        <hr />
        <section>
            <NavTitle id="news"><h2>News</h2></NavTitle>
            <p>For the latest news about React, <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/reactjs">follow <strong>@reactjs</strong> on Twitter</a> and the <Link to="/blog/">official React blog</Link> on this website.</p>
        </section>
    </>
);


export default page;