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
        <IconsWrapper>
          <Left>
            <img src={appleLogoIcon} alt='apple-logo' />
            <ul>
              {
                TopdataLeft.map((items) => 
                  <li key={items.id}>
                    {items.title}
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
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  padding: 0 30px;

  img {
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

const Left = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    
    li {
      margin-right: 20px;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
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
      width: 30px;
      margin-right: 20px;

      &:last-child {
        width: auto;
        margin-right: 0;
      }
    }
  }

  img {
    display: block;
    width: 25px;
    height: 25px;
  }
`;