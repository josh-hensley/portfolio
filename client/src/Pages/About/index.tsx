import styled from "styled-components";

const Main = styled.main`
    height: 76vh;
`
const StyledHeading = styled.h1`
    text-align: center;
`

const About: React.FC = () => {
    return <>
    <Main>
        <StyledHeading>About</StyledHeading>
    </Main>
    </>
}

export default About;