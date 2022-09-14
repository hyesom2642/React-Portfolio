// > styled-components 
import styled, { keyframes } from 'styled-components';

const htmlMove = keyframes`
    from {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    to {
        top: 0;
        left: 0;
    }
`;
const cssMove = keyframes`
    from {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    to {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`;
const jsMove = keyframes`
    from {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    to {
        top: 100%;
        left: 0;
        transform: translateY(-100%);
    }
`;
const reactMove = keyframes`
    from {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    to {
        top: 0;
        left: 100%;
        transform: translate(-100%, 0);
    }
`;
const tsMove = keyframes`
    from {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    to {
        top: 50%;
        left: 100%;
        transform: translate(-100%, -50%);
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .profile {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 200px;
        height: 200px;
        border: 0;
        border-radius: 50%;
        z-index: 200;
    }
    
    .logo {
        position: absolute;
        display: block;
        width: 80px;
        height: 80px;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.3s ease-in-out;

        &:hover {
            filter: brightness(50%);
        }
    }
    .html {
        animation: ${htmlMove} 2s ease-in-out forwards;
    }
    .css {
        animation: ${cssMove} 2s ease-in-out forwards;
    }
    .javascript {
        animation: ${jsMove} 2s ease-in-out forwards;
    }
    .react {
        animation: ${reactMove} 2s ease-in-out forwards;
    }
    .typescript {
        animation: ${tsMove} 2s ease-in-out forwards;
    }

    @media screen and ${(props) => props.theme.tablet}{
        .profile {
            width: 250px;
            height: 250px;
        }
        .logo {
            width: 90px;
            height: 90px;
        }
    }
    @media screen and ${(props) => props.theme.desktop}{
        .profile {
            width: 300px;
            height: 300px;
        }
        .logo {
            width: 100px;
            height: 100px;
        }
    }
`;
export { Container };