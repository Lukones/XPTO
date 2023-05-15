import styled from "styled-components";
import AppImage from "../../../imgs/Rectangles/Rectangle 1-2.png";

const Container = styled.div`
  text-align: center;
  height: 650px;

  @media (max-width: 1024px) {
    height: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 67%);
  height: 100%;
  width: 100%;

  @media (max-width: 1024px) {
    height: 100%;
    clip-path: none;
  }

`;

function SecPageImg() {
  return (
    <Container>
      <Image src={AppImage} alt="image-app" />
    </Container>
  )
};

export default SecPageImg;