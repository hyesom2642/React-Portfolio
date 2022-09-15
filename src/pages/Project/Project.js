// > styled-components 
import styled from 'styled-components';

// > react-carousel 
import Slider from 'react-slick';

// > components
import Screen from '../../components/Screen/Screen';

const Proejct = () => {
    const settings = {
        className: "center",
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        speed: 3000
    };

    return(
        <>
            <Screen>
                <Container>
                    <SliderWrapper {...settings}>
                        <div>
                            <img src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/vgB4d/btrdImQHKhR/1rnBjRP1nkgIkNKiwqlWn1/img.png" alt="" />
                        </div>
                        <div>
                            <img src="https://pbs.twimg.com/media/Ex2WofyVoAEP-mv.jpg:large" alt="" />
                        </div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RvKtYPJjLa2qlP9JKMOaj_Wjj3qT3CftbmahpTCQOX5f4nQibS7uZhjjOXA4ocUssBA&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                    </SliderWrapper>
                </Container>
            </Screen>
        </>
    )
}
export default Proejct;

const Container = styled.div`
    width: 100%;
    height: 100%;


`;

const SliderWrapper = styled(Slider)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: hotpink;

    div {
        width: 100%;
        height: 100%;
    }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            cursor: pointer;
        }
    }
`;
