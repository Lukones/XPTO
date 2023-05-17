import styled from "styled-components";
import Links from "./Links";

const textOption = ['Tarifas Móvil', 'Tarifas Fibra', 'Tarifas Fibra + Móvil', 'Atención Al Cliente'];
const TMovil = ['Móvil 24GB', 'Móvil 50GB', 'Móvil 100GB'];
const TFibra = ['Fibra 600Mb', 'Fibra 300Mb', 'Fibra 100Mb'];
const TFibraMovil = ['600Mb+55GB', '300Mb+2líneas*25GB', '600Mb+25GB', '300Mb+55GB', '300Mb+10GB'];
const TAtencion = ['Contacto', 'Centro de ayuda', 'Lámanos al 1777'];

const Options = styled.ul`
  display: flex;
  justify-content: center;

  @media (max-width: 481px) {
    width: 100%;

}
`;

const OptionsList = styled.li`
  padding: 0 2rem;
  min-width: 7.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 12px;
  height: 100%;
  list-style: none;
  p {
    font-weight: 900;
  }

  @media (max-width: 768px) {
    padding: 0 0.4rem;
    min-width: 5.5rem;
    p {
      font-size: 13px;
      margin-bottom: 0.4rem;
    }

  @media (max-width: 481px) {
    p {
      font-size: 9px;
      margin-bottom: 0.4rem;
    }
}
`;

function OptionsFooter() {
  return (
    <Options>
      {textOption.map((text, indice) => 
        <OptionsList key={indice}>
            <div><p>{text}</p></div>
            <Links text={text} tarifas={'Tarifas Móvil'} subtarifas={TMovil} />
            <Links text={text} tarifas={'Tarifas Fibra'} subtarifas={TFibra} />
            <Links text={text} tarifas={'Tarifas Fibra + Móvil'} subtarifas={TFibraMovil} />
            <Links text={text} tarifas={'Atención Al Cliente'} subtarifas={TAtencion} />
        </OptionsList>)}
    </Options>
  )
};

export default OptionsFooter;