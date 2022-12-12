// > styled-components
import styled from 'styled-components';

import { useState } from 'react';

// > profiledata
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
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #eee;
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
`;