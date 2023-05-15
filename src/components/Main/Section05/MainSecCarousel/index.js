import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import "../../Carousel.css";
import {imgs} from "../MainSecImgs";
import { GlobalStyledCarousel } from "../../../stylesGlobal";


const StyledCarousel = styled(GlobalStyledCarousel)`
      @media (max-width: 1024px) {
        img {
            max-width: 420px;
            height: 387px;
        }

      @media (max-width: 768px) {
        img {
            max-width: 370px;
            height: 341px;
        }

        .carousel-indicators button {
            width: 13px;
            height: 13px;
          }

        .carousel-indicators {
            margin-right: 10%;
            margin-left: 10%;
        }

      @media (max-width: 481px) {
        img {
            max-width: 300px;
            height: 276px;
        }

        .carousel-indicators button {
            width: 10px;
            height: 10px;
          }

        .carousel-indicators {
            margin-right: 0%;
            margin-left: 0%;
        }
    }

`;

function CarouselImgs() {
    return (
        <>
            <StyledCarousel interval={null}>
                {imgs.map((text, index) => (
                    <Carousel.Item key={index}>
                        <a href="sport">
                            <img
                                src={text}
                                alt='imgs'
                            ></img>
                        </a>
                    </Carousel.Item>
                ))}
            </StyledCarousel>
        </>
    )
};

export default CarouselImgs;


