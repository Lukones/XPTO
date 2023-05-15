import styled from 'styled-components';
import { Carousel } from "react-bootstrap";
import "../components/Main/Carousel.css"

export const GlobalSection = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

export const GlobalCentralizeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalButton = styled.button`
  width: 300px;
  height: 65px;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-color: #000;
  color: #f5f5f5;
  font-size: 1.5rem;
  font-weight: normal;
  border-radius: 5px;
  margin: 1.5rem 0rem;
  border: none;
  border-radius: 5px;

  &:hover {
        background-color: #BFBFBF;
        color: black;        
    }
    
`;

export const GlobalTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  margin: 2.5rem 0 1.5rem 0;
  color: black;

  @media (max-width: 1024px) {
    font-size: 26px;
}

  @media (max-width: 768px) {
    font-size: 22px;
}

  @media (max-width: 481px) {
    font-size: 17px;
}
`;

export const GlobalStyledCarousel = styled(Carousel)`
    .carousel-control-prev, .carousel-control-next {
        display: none;
    }

    .carousel-indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -55px;
    }

    .carousel-indicators button {
        background-color: #000;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        margin-left: 10px;
      }
      
      .carousel-indicators .active {
        background-color: #000;
      }
`;