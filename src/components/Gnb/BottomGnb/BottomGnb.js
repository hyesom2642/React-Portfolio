// > styled-components
import styled from 'styled-components';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BottomData from './BottomData';
// import Screen from '../../Screen/Screen';

const BottomGnb = () => {
  const [iconData] = useState(BottomData);
  // const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  // function screenHandler() {
  //   setOpen(!open);
  // }

  return(
    <>
      <Container>
        <IconsWrapper>
          {
            iconData.map((icons, i) => 
              <img 
              key={i} 
              src={icons.imageUrl}
              alt={icons.title}
              onClick={() => {
                // screenHandler()
                navigate(`${icons.path}`)
                }}
              />
            )
          }
        </IconsWrapper>
      </Container>
    </>
  )
}
export default BottomGnb;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  z-index: 100;

  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
`;
