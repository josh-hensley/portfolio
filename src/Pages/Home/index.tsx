import styled from "styled-components";

const Main = styled.main`
    height: 76vh;
`
const Heading = styled.h1`
    text-align: center;
`

const Home: React.FC = ()=>{
    return <>
    <Main>
        <Heading>Home Page</Heading>
    </Main>
    </>;
}
export default Home;