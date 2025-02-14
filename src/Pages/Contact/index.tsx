import styled from 'styled-components'

const Main = styled.main`
    height: 76vh;
`
const Heading = styled.h1`
    text-align: center;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`
const Spacer = styled.div`
    
`
const Card = styled.div`
    border-bottom: solid cyan 1px;
    border-left: solid cyan 1px;
    border-top: solid magenta 1px;
    border-radius: 1em;
    padding: 1em;
    background-color: #0008;

`

const Contact: React.FC = () => {
    return <>
    <Main>
        <Heading>Contact Me</Heading>
        <CardContainer>
            <Spacer />
            <Card>
                <p><a href="mailto:me@joshhensley.com">email</a></p>
            </Card>
            <Card>
                <p><a href="http://www.github.com/josh-hensley">github</a></p>
            </Card>
            <Card>
                <p><a href="https://www.linkedin.com/in/josh-hensley-88392181/">linkedin</a></p>
            </Card>
            <Spacer />
        </CardContainer>
    </Main>
    </>
}

export default Contact;