import React from 'react';

import NavTitle from '../../../components/UI/NavTitle/NavTitle';

const page = () => (
    <>
        <section>
            <h1> Courses </h1>

            <NavTitle id="free-courses"> <h2>Free Courses</h2> </NavTitle>
            <ul>
                <li>Codecademy: React 101 - Codecademy’s introductory course for React.</li>

                <li>Egghead.io: Start Learning React - This series will explore the basic fundamentals of React to get you started.</li>

                <li>React Crash Course 2018 - A beginner-friendly crash course through the most important React topics.</li>

                <li>React Armory: Learn React by Itself - With React Armory, you can learn React without the buzzwords.</li>

                <li>The Road to Learn React - Build a real world application in plain React without complicated tooling.</li>

                <li>Egghead.io: The Beginner’s Guide to ReactJS - Free course for React newbies and those looking to get a better understanding of React fundamentals.</li>

                <li>Free React Bootcamp - Recordings from three days of a free online React bootcamp.</li>
            </ul>
        </section>
        <hr />
        <section>
            <NavTitle id="paid-courses"> <h2>Paid Courses</h2> </NavTitle>
            <ul>
                <li>Egghead.io - Short instructional videos on React and many other topics.</li>

                <li>Frontend Masters - Video courses on React and other frontend frameworks.</li>

                <li>Fullstack React - The up-to-date, in-depth, complete guide to React and friends.</li>

                <li>Pure React - A step-by-step guide to mastering React.</li>

                <li>React for Beginners - Learn React in just a couple of afternoons.</li>

                <li>React for Designers - A 6-hour React course for designers, by designers.</li>

                <li>React Essentials for Designers - React courses tailored for designers: the fundamentals, capabilities, limitations and how they relate to design.</li>

                <li>Essential React - A crash course for doers, moving fast from “Hello World” to advanced component composition.</li>

                <li>React Training: Advanced React.js - Take your React skills to the next level.</li>

                <li>Tyler McGinnis - Tyler McGinnis provides access to his courses for a monthly fee. Courses include “React Fundamentals” and “Universal React”.</li>

                <li>Mastering React - Build professional interactive apps with React.</li>
            </ul>
        </section>
    </>
);


export default page;