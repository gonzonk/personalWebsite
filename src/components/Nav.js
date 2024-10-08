import './Nav.css'
import resume from '../assets/resume.pdf'

function Nav(props){
    return (
        <nav className='nav'>
            <ul>
                <li><a href={resume} download='GonzaloEsparzasResume'>Resume</a></li>
                <li><a href="/personalWebsite">Home</a></li>
                <li><a href='https://github.com/gonzonk'>Github</a></li>
            </ul>
        </nav>
    )
}

export default Nav;