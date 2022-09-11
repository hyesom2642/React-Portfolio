// > styled-components 
import styled from 'styled-components';

const Home = ({children}) => {
    return(
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}
export default Home;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;