import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    height: 8vh;
    justify-content: space-between;
    background-image: linear-gradient(#00000055, #55555500);
    border-radius: 0 0 1em 1em;
`
const LogoDiv = styled.div`
    margin-left: 1em;
`
const NavLinksList = styled.ul`
    list-style: none;
    display: flex;
`
const NavItem = styled.li`
margin: 0 1em;
`
const Link = styled.a`
    text-decoration: none;
    &:link {
        color: #EEE;
    }
    &:hover {
        color: #FFF;
    };
    &:visited {
        color: #000;
    };
`

const Header: React.FC = ()=>{
    return <>
    <Navbar>
        <LogoDiv>
            <Link href='/'><h1>Josh Hensley</h1></Link>
        </LogoDiv>
        <NavLinksList>
            <NavItem><Link href='/About'>About</Link></NavItem>
            <NavItem><Link href='/Contact'>Contact</Link></NavItem>
            <NavItem><Link href='/Portfolio'>Portfolio</Link></NavItem>
        </NavLinksList>
    </Navbar>
    </>
}

export default Header;