import styled from "styled-components";
import { GlobalButton } from "../../../components/stylesGlobal";
import { Title, SubTitle, SmallText, DivCenter } from "../../pagefriend/SecPageTitle";

const SubTitleEdit = styled(SubTitle)`
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 32px;
  font-weight: normal;
  text-transform: none;
  

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

const GlobalButtonCTA = styled(GlobalButton)`
  margin: 0 0 4rem 0;

  @media (max-width: 768px) {
    width: 208px;
    height: 44px;
    font-size: 16px;
    font-weight: 200;
    margin: 0 0 1.5rem;
}
`;

function SectionTitleCallToAction() {
  return (
    <DivCenter>
      <Title>¿Te gusta la Fórmula 1?</Title>
      <SubTitleEdit>¿Quieres conocer a Fernando Alonso?</SubTitleEdit>
      <Description>Bicampeón de Fórmula 1</Description>
      <SmallText>
        suscribe un paquete con nuestros y gana inmediatamente dos entradas para ver la Fórmula 1
      </SmallText>
      <GlobalButtonCTA>INSCRIBIRSE</GlobalButtonCTA>
    </DivCenter>
  )
};

export default SectionTitleCallToAction;