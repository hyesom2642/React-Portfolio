// > styled-components 
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 99;
`;
const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    width: 90%;
    height: 75%;
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
`;

const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 7%;
    background-color: #c0c0c0;
`;

const ButtonWrapper = styled.div`
    button {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
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
    
`;

export { Wrapper, Container, Header, ButtonWrapper, Title, Content };