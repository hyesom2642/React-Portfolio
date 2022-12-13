// styled-components
import styled from 'styled-components';

// > 
import { useState } from 'react';

// > components
import Screen from '../../components/Screen/Screen';
import Modal from '../../components/Modal/Modal';

// > data
import Data from './ProjectData';

const Project = () => {
  const [ProjectData] = useState(Data);
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');

  function modalOpen(e){
    setOpen(true);
    setSrc(e.target.currentSrc);
  };
  function modalClose(e){
    setOpen(false);
  };

  return (
    <>
      <Screen>
        <Container>
          {
            ProjectData.map((item) => 
              <ProjectItem onClick={modalOpen} key={item.id}>
                <img
                  src={item.imgUrl} 
                  alt={item.name}
                  name={item.name}
                  id={item.id}
                />
              </ProjectItem>
            )
          }
        </Container>
      </Screen>
      {
        open === true
        ? <Modal modalClose={modalClose} ProjectData={ProjectData} src={src} /> 
        : null
      }
    </>
  )
}

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: hotpink;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ProjectItem = styled.div`
  display: block;
  width: 50%;
  height: 500px;
  background-color: hotpink;
  padding: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;