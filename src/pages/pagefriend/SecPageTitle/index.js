import styled from "styled-components";
import { GlobalButton } from "../../../components/stylesGlobal";

export const DivCenter = styled.div` 
  max-width: 1080px; 
  margin: 0 1rem; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  text-align: center;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 26px;
    }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 481px) {
    font-size: 17px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 26px;
    }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 481px) {
    font-size: 17px;
    margin-top: 0.5rem;
  }
`;

const TitleLarge = styled.p`
  font-size: 64px;
  font-weight: 900;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 52px;
    }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 481px) {
    font-size: 32px;
  }
`;

export const SmallText = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #666666;
  margin: 3rem 0;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 19px;
    width: 375px;
    }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 481px) {
    font-size: 12px;
    width: 263px;
    margin: 2.5rem 0;
  }
`;

const GlobalButtonPlanAmigo = styled(GlobalButton)`
  margin: 0 0 4rem 0;

  @media (max-width: 768px) {
    width: 208px;
    height: 44px;
    font-size: 16px;
    font-weight: 200;
    margin: 0 0 1.5rem;
}
`;

function MainSectionTitleCTA() {
  return (
    <DivCenter>
      <Title>Con nuestro plan amigo querrás invitar a toda tu agenda</Title>
      <SubTitle>Conseguí</SubTitle>
      <TitleLarge>15€</TitleLarge>
      <Title>en descuentos, por cada amigo que traigas.</Title>
      <SmallText>Suscribe a nuestros paquetes</SmallText>
      <GlobalButtonPlanAmigo>INSCRIBIRSE</GlobalButtonPlanAmigo>
    </DivCenter>
  )
};

export default MainSectionTitleCTA;