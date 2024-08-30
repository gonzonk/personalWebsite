import './Main.css';
import { useState } from 'react';

const aboutMeString = "Hello! I'm Gonzalo Esparza a junior at the Massachussets Institute of Technology, studying Computer Science Engineering. I have a particular interest in machine learning and game development!!!!!!";
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
        </main>
    )
}

export default Main;