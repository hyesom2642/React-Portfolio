// > styled-components
import styled from 'styled-components';

import { useState } from 'react';

import ProfileData from './ProfileData';

const ProfileModal = ({state}) => {
  const [profileData] = useState(ProfileData);
  
  return(
    <>
      <Wrapper>
        {
          profileData.map((modal) => 
              state.className === modal.className
              ?
              <Modal key={modal.id}>
                <div className={modal.className}>
                  <h1>{modal.title}</h1>
                  <p>{modal.content}</p>
                </div>
              </Modal>
              : null
          )          
        }
      </Wrapper>
    </>
  )
}
export default ProfileModal;

const Wrapper = styled.div`
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  padding: 20px;
  background-color: skyblue;
  border-radius: 10px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    
  }

  // .html {
  //   background-color: hotpink;
  // }
  // .css {
  //   background-color: blue;
  // }
  // .javascript {
  //   background-color: red;
  // }
  // .react {
  //   background-color: orange;
  // }
  // .typescript {
  //   background-color: yellow;
  // }
`;