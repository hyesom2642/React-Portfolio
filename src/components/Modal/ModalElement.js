// > styled-components
import styled from 'styled-components';

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

const CloseButton = styled.div`
  position: absolute;
  left: 50%;
  top: 3%;
  transform: translate(-50%, 5%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  z-index: 200;
`;

const ModalForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    background: #D0D0D0;
    border-color: #B8B8B8;
    color: #6F6F6F;
    border: 1px solid #ccc;
    border-radius: 125px;
    box-shadow: inset 0 13px 25px rgba(255,255,255,0.5), 0 3px 5px rgba(0,0,0,0.2), 0 10px 13px rgba(0,0,0,0.1);
    font-family: 'Lucida Grande', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    margin: 5rem 1rem;
    padding: 1.2rem 4rem;
    position: relative;
    transition: all ease 0.3s;
  }
  button:hover {
    background: #4A90E2;
    border-color: #3672B6;
    color: #fff;
  }
`;

const Img = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  margin-right: 100px;
`;

export {Overlay, Container, CloseButton, ModalForm, Img};