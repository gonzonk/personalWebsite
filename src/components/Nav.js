import './Nav.css'
import resume from '../assets/resume.pdf'

function Nav(props){
    return (
        <nav className='nav'>
            <ul>
                <li><a href={resume} download='GonzaloEsparzasResume'>Resume</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    )
}

export default Nav;