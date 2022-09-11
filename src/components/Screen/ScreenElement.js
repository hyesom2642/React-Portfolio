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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1400px;
    height: 100%;
    max-height: 600px;
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