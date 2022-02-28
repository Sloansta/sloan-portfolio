import React from 'react';
import 'bootstrap';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-section-body container">
                <h3>Hi, I'm Sloan</h3>
                <p>I am a fullstack web developer based in Michigan.</p>
                <div className="tech container">
                    <h4>Tech that I use</h4>
                    <p>
                        At the moment, I am mainly using JavaScript and Nodejs for my projects.
                        For projects that require a front-end, React is also a technology I enjoy using.
                        I really like working with JavaScript and TypeScript, but that isn't all I use.
                        I also am fairly comfortable with the technologies below:
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Go</li>
                    </ul>
                    <p>
                        To see what I've worked on, checkout the Projects page.
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default About;