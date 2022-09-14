// > styled-components
import styled from 'styled-components';

import { LeftData, RightData } from './TopData';

import { useState, useEffect } from 'react';

import appleLogoIcon from '../../../assets/icons/apple-logo.png';

const TopGnb = () => {
  const [TopdataLeft] = useState(LeftData);
  const [TopdataRight] = useState(RightData);
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const newTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(newTime);
  }, []);

  return(
    <>
      <Container>
        <img src={appleLogoIcon} alt='apple-logo' />
        <IconsWrapper>
          <Left>
            <ul>
              {
                TopdataLeft.map((items) =>
                  <li key={items.id}>
                    <button>
                      {items.title}
                    </button>
                  </li>
                )
              }
            </ul>
          </Left>
          <Right>
            <ul>
              {
                TopdataRight.map((icons) =>
                  <li key={icons.id}>
                    <img src={icons.imageUrl} alt={icons.title} />
                  </li>
                )
              }
              <li>{time.toLocaleString('ko-KR')}</li>
            </ul>
          </Right>
        </IconsWrapper>
      </Container>
    </>
  )
}
export default TopGnb;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  padding: 0 30px;
  background-color: rgba(255, 255, 255, 0.5);

  img {
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 0px;
  }

  @media screen and ${(props) => props.theme.tablet} {
    height: 50px;

    img {
      margin-right: 20px;
    }
  }
  @media screen and ${(props) => props.theme.desktop} {
    height: 60px;
  }
`;

const IconsWrapper = styled.div`
  display: none;

  @media screen and ${(props) => props.theme.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-conten: flex-end;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    
    li {
      margin-right: 15px;
      cursor: pointer;
      
      button {
        font-size: 16px;
        padding: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media screen and ${(props) => props.theme.desktop} {
    li {
      margin-right: 20px;

      button {
        font-size: 17px;
      }
    }
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    
    li {
      font-size: 16px;
      width: 30px;
      margin-right: 15px;

      &:last-child {
        width: auto;
        margin-right: 0;
      }
    }
  }  
  img {
    display: block;
    width: 20px;
    height: 20px;
  }

  @media screen and ${(props) => props.theme.desktop} {
    ul {
      li {
        font-size: 17px;
        margin-right: 20px;
      }
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;