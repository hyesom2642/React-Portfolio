// > styled-components
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 8vh;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    @media screen and ${(props) => props.theme.tablet} {
        height: 9vh;
    }
    @media screen and ${(props) => props.theme.desktop} {
        height: 10vh;
    }
`;
const IconsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    z-index: 100;

        img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            transform: translateY(-10px);
        }
    }

    @media screen and ${(props) => props.theme.tablet} {
        img {
            width: 45px;
            height: 45px;
            margin-right: 15px;
        }
    }
    @media screen and ${(props) => props.theme.desktop} {
        img {
            width: 55px;
            height: 55px;
            margin-right: 20px;
        }
    }
`;

export { Container, IconsWrapper };