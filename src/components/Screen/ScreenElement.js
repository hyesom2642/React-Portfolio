// > styled-components 
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 99;

    @media screen and ${(props) => props.theme.tablet} {

    }
`;
const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;    
    background-color: #fff;
    overflow: hidden;

    @media screen and ${(props) => props.theme.tablet}{
        max-width: 750px;
        max-height: 600px;
        border-radius: 7px;
    }
    @media screen and ${(props) => props.theme.desktop}{
        max-width: 1200px;
        max-height: 700px;
    }
`;

const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    height: 40px;
    background-color: #c0c0c0;
`;

const ButtonWrapper = styled.div`
    display: flex;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

        &:last-child {
            margin-right: 0;
        }

        .ic-close {
            width: 100%;
            height: 100%;
        }
    }
    button.red {
        background-color: #D62323;
    }
    button.yellow {
        background-color: #E6D424;
    }
    button.green {
        background-color: #7BB82C;
    }
`;

const Title= styled.h1`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: normal;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export { Wrapper, Container, Header, ButtonWrapper, Title, Content };