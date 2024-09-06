import './Main.css';
import { useState } from 'react';

const aboutMeString = "Hello! I'm Gonzalo Esparza a junior at the Massachussets Institute of Technology, studying Computer Science Engineering. I have a particular interest in full stack web development, game development, and machine learning. I'm Eager to join the software engineering field and further develop my skills. Visit my github to see what I have been working on lately.";
const currentCourseworkString = "Software Design, Introduction to Algorithms, Computation Structures, Introduction to Probability, Intro to Machine Learning";
const pastCourseworkString = 'Introduction to Computer Science Programming in Python, Introduction to Computational Thinking and Data Science, Fundamentals of Programming, Software Construction, Introduction to Low-Level Programming, +General Institue Requirements'

function Main(props){

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <main>
            <h2>About</h2>
                <p>{aboutMeString}</p>
            <h2>Coursework</h2>
                <p style={{display:'inline'}}>Current: {currentCourseworkString}   </p>
                <button style={{display:'inline'}} type="button" className="pastCoursework" onClick={(e) => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? 'Show Past Coursework' : 'Hide Past Coursework'}
                </button>
                {!isCollapsed && <p>{pastCourseworkString}</p>}
            <h2>Visit my Software Design class web portfolio</h2>
                <a href='https://gonzonk.github.io/portfolio-gje/'>Software Design Portfolio</a>
        </main>
    )
}

export default Main;