// > styled-components 
import { Wrapper, Container, Header, ButtonWrapper, Title, Content } from './ScreenElement';

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// > icons 
import { IoMdClose, IoMdResize } from "react-icons/io";

const Screen = ({children, ProfileData}) => {
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
                            <button className="red" onClick={goHome}>
                                < IoMdClose className="ic-close" />
                            </button>
                            <button className="yellow"></button>
                            <button className="green">
                                < IoMdResize className="ic-resize" />
                            </button>
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