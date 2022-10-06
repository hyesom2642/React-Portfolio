import {Overlay, Container, CloseButton, ModalForm, Img} from './ModalElement';

const Modal = ({modalClose, ProjectData, src}) => {
  return(
    <>
      <Overlay />
      <Container>
        <CloseButton onClick={modalClose} />
        <ModalForm>
          <Img src={src} alt="" />
          <div className="content">
            <h1>{ProjectData[0].name}</h1>
            <p>{ProjectData[0].desc}</p>
            <div>
              <button className="code">code</button>
              <button className="demo">demo</button>
            </div>
          </div>
        </ModalForm>
      </Container>
    </>
  )
}

export default Modal;