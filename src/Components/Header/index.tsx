import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header: React.FC = () => {
    const [displayDropdown, setDisplayDropdown] = useState({
        display: 'none'
    })
    
    const toggleDisplay = () => {
        if (displayDropdown.display == 'none') {
            setDisplayDropdown({
                display: 'block'
            })
        }
        else {
            setDisplayDropdown({
                display: 'none'
            })
        }
        
    }

    return <>
        <nav>
            <div className="logo">
                <a href='/'><h1>Josh Hensley</h1></a>
            </div>
            <FontAwesomeIcon icon={faBars} className="faBars" onClick={toggleDisplay} />
            <ul className='nav-list'>
                <li className='nav-item'><a href='/About'>About</a></li>
                <li className='nav-item'><a href='/Contact'>Contact</a></li>
                <li className='nav-item'><a href='/Projects'>Projects</a></li>
            </ul>
        </nav>
        <div className="dropdown" style={displayDropdown}>
            <ul className='nav-list-dropdown'>
                <li className='nav-item'><a href='/About'>About</a></li>
                <li className='nav-item'><a href='/Contact'>Contact</a></li>
                <li className='nav-item'><a href='/Projects'>Projects</a></li>
            </ul>
        </div>
    </>
}

export default Header;