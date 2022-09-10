// > styled-components 
import { Wrapper, Container, Header, ButtonWrapper, Title, Content  } from './ScreenElement';

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Screen = ({children, ProfileData}) => {
    console.log(ProfileData);
    let navigate = useNavigate();
    
    function goHome(){
        navigate('/');
    }

    return(
        <>
            <Wrapper>
                <Container>
                    <Header>
                        <ButtonWrapper>
                            <button className="red" onClick={goHome}></button>
                            <button className="yellow"></button>
                            <button className="green"></button>
                        </ButtonWrapper>
                        <Title>
                        </Title>
                    </Header>
                    <Content>
                        {children}
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
}
export default Screen;