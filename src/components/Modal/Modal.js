// > styled-components
import styled from 'styled-components';

const Modal = () => {
  return(
    <>
      <Overlay />
      <Container>
        <CloseButton />
        <ModalForm>

        </ModalForm>
      </Container>
    </>
  )
}
export default Modal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const Container = styled.div`
  position: relatvie;
`;

const ModalForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  border-radius: 10px;
  background-color: beige;
  z-index: 100;
`;

const CloseButton = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 5%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  z-index: 100;
`;