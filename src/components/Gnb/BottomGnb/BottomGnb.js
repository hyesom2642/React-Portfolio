// > styled-components 
import { Container, IconsWrapper } from './BottomGnbElement';

// > hooks 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// > data 
import BottomData from './BottomData';

const BottomGnb = () => {
  const [iconData] = useState(BottomData);
  let navigate = useNavigate();

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