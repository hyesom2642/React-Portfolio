// > styled-components
import {Container, IconsWrapper, Left, Right} from './TopGnbElement';

// > hooks 
import { useState, useEffect } from 'react';

// > data
import { LeftData, RightData } from './TopData';

// > logo image
import appleLogoIcon from '../../../assets/icons/apple-logo.png';

const TopGnb = () => {
  const [TopdataLeft] = useState(LeftData); // 왼쪽 데이터
  const [TopdataRight] = useState(RightData); // 오른쪽 데이터
  const [time, setTime] = useState(new Date()); // 오른쪽 시계

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