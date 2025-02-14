import styled from "styled-components";

const StyledFooter = styled.p`
    height: 8vh;
    text-align: center;
    background-image: linear-gradient(#55555500, #00000055);
`

const Footer: React.FC = ()=>{
    return <>
    <StyledFooter>&copy; Josh Hensley 2025</StyledFooter>
    </>
}

export default Footer;