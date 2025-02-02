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

const Header: React.FC = ()=>{
    return <>
    <Navbar>
        <LogoDiv>
            <a href='/'><h1>Josh Hensley</h1></a>
        </LogoDiv>
        <NavLinksList>
            <NavItem><a href='/About'>About</a></NavItem>
            <NavItem><a href='/Contact'>Contact</a></NavItem>
            <NavItem><a href='/Portfolio'>Portfolio</a></NavItem>
        </NavLinksList>
    </Navbar>
    </>
}

export default Header;