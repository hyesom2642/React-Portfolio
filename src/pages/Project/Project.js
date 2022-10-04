// > styled-components 
import styled from 'styled-components';

// > react-carousel 
import Slider from "react-slick";

// > 
import { useState } from 'react';

// > components
import Screen from '../../components/Screen/Screen';
import Modal from '../../components/Modal/Modal';
import Data from './ProjectData';

const Proejct = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000
    };

    const [ProjectData] = useState(Data);
    const [open, setOpen] = useState(false);
    const [src, setSrc] = useState('');

    function modalOpen(e){
        setOpen(true);
        setSrc(e.target.currentSrc);
    };
    function modalClose(){
        setOpen(false);
    };

    return(
        <>
            <Screen>
                <Container>
                    <SliderContainer {...settings}>
                        {
                            ProjectData.map((item) => 
                                <div onClick={modalOpen} key={item.name}>
                                    <img src={item.imgUrl} alt={item.name} />
                                </div>
                            )
                        }
                    </SliderContainer>
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
export default Proejct;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const SliderContainer = styled(Slider)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    background-color: hotpink;
    
    img {
        display: block;
        width: 300px;
        height: 100%;
        cursor: pointer;
        object-fit: contain;
    }
`;