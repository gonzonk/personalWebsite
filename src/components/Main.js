import './Main.css';

function Main(props){
    return (
        <main>
            <h2>About</h2>
                <p>about me</p>
            <h2>Projects</h2>
                <ul className='project-list'>
                    <li><a>project</a></li>
                </ul>
            <h2>Coursework</h2>
                <p>current coursework</p>
        </main>
    )
}

export default Main;