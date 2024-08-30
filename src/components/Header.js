import './Header.css';
import lumaIcon from '../assets/lumaIcon.png';

function Header(props){
    return (
        <header>
            <h1>Computer Science</h1>
            <img src={lumaIcon}></img>
        </header>
    )
}

export default Header;