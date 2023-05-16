import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import "../../Carousel.css";
import { GlobalStyledCarousel } from "../../../stylesGlobal";

const Videos = [
    "https://www.youtube-nocookie.com/embed/thSPGPnuuNg",
    "https://www.youtube-nocookie.com/embed/28xeZIh_cqA",
    "https://www.youtube-nocookie.com/embed/C4-Qg7Owurc",
];

const Iframe = styled.iframe`
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        max-width: 95vw;
        max-height: 430px;
    }

    @media (max-width: 768px) {
        max-width: 95vw;
        max-height: 370px;
    }
    
    @media (max-width: 481px) {
        max-height: 300px;
    }

`;

const StyledCarousel = styled(GlobalStyledCarousel)`
    .carousel-indicators {
        bottom: -25px;
    }

    @media (max-width: 481px) {
        .carousel-indicators button {
            width: 10px;
            height: 10px;
          }
    }
`;

function MainSecVideoCTA() {
    return (
    <StyledCarousel interval={null} variant="dark">
        {Videos.map((text, index) => (
            <Carousel.Item key={index}>
                <Iframe
                    width="854"
                    height="480"
                    src={text}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></Iframe>
            </Carousel.Item>
        ))}
    </StyledCarousel>
    )
};

export default MainSecVideoCTA;