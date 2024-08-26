import './Nav.css'

function Nav(props){
    return (
        <nav className='nav'>
            <ul>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    )
}

export default Nav;