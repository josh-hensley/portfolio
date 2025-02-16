const Header: React.FC = ()=>{
    return <>
    <nav>
        <div className="logo">
            <a href='/'><h1>Josh Hensley</h1></a>
        </div>
        <ul className='nav-list'>
            <li className='nav-item'><a href='/About'>About</a></li>
            <li className='nav-item'><a href='/Contact'>Contact</a></li>
            <li className='nav-item'><a href='/Projects'>Projects</a></li>
        </ul>
    </nav>
    </>
}

export default Header;