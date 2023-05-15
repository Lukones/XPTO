import styled from "styled-components";
import { GlobalCentralizeDiv } from "../../stylesGlobal";

const textOption = [
  { id: 1, name: 'Plan Amigo', link: '/friend' },
  { id: 2, name: 'Regalo', link: '/sport' },
  { id: 3, name: 'Preguntas', link: '/faq' },
];

const OptionsList = styled.li`
  padding: 0 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  a {
    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    
    a {
      display: none;
    }

  }

`;

const Div = styled.div`
    a {text-decoration: none;
    color: #000;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
    display: none}

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    .material-icons {
      position: absolute;
      font-size: 28px;
      left: 45px;
      display: inline;
      text-decoration: none;
      color: #000;
    }
  }

  @media (max-width: 481px) {
    .material-icons {
      font-size: 24px;
      left: 25px;
    }

  }

`;

function OptionsHeader() {

  return (
    <GlobalCentralizeDiv>
      <Div><a href="/" className="material-icons">menu</a></Div>
      {textOption.map((text, indice) =>
        <OptionsList key={indice}>
          <a href={window.location.origin + text.link}>{text.name}</a>
        </OptionsList>)}
    </GlobalCentralizeDiv>
  )
};

export default OptionsHeader;