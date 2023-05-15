import styled from "styled-components";
import { useState } from "react";
import PopDesign from "../../../PopUp";
import { GlobalButton, GlobalTitle } from "../../../stylesGlobal";

const MainSection = styled.div`
    text-align: center;
    max-width: 1080px;
    width: 100%;
`;

const GlobalTitleSec2 = styled(GlobalTitle)`
    margin: 2.5rem;
    line-height: 1.5;
    
    @media (max-width: 768px) {
        margin: 0rem;
        padding: 2rem 0.2rem 0.8rem;
    }

    @media (max-width: 481px) {
        margin: 0rem;
        padding: 1.8rem 0.2rem 0.5rem;
    }
`;

const SubTitle = styled.h2`
    font-weight: 400;
    margin: 0.5rem 0rem 0.8rem;
    font-size: 1.5rem;
    line-height: 1.5;


    @media (max-width: 1024px) {
        font-size: 22px;
    }

    @media (max-width: 768px) {
        font-size: 19px;
        padding: 0 2rem;
    }

    @media (max-width: 481px) {
        font-size: 16px;
        padding: 0 1.5rem;
    }
`;

const GlobalButtonCTA = styled(GlobalButton)`
    margin: 1.5rem 0rem;

    @media (max-width: 768px) {
        width: 208px;
        height: 44px;
        font-size: 16px;
        font-weight: 200;
        margin: 0 0 1.5rem;
    }

`;

function MainSecButtonCTA() {

     // define estado "open" como false usando o hook useState
    const [open, setOpen] = useState(false)

    // função para abrir o popup definida aqui
    const popUpOpen = () => {
        setOpen(true);
    }

    // função para fechar o popup definida aqui
    const popUpClose = () => {
        setOpen(false);
    }

    // botão <GlobalButtonCTA onClick={popUpOpen}> com evento onClick para abrir o popup
    //  {open && <PopDesign onClose={popUpClose} />} renderiza o componente de popup apenas se o estado "open" for true
    return (
        <MainSection >
            
                <GlobalTitleSec2>
                    ¿Quieres saber si tenemos cobertura de fibra en tu hogar?
                </GlobalTitleSec2>
                <SubTitle>
                Míralo aquí y contrata tu tarifa de fibra + móvil o solo fibra de forma sencilla
                </SubTitle>
            
            <GlobalButtonCTA onClick={popUpOpen}>
                Comprobar cobertura
            </GlobalButtonCTA>
            {open && <PopDesign onClose={popUpClose} />}
        </MainSection >
    )
};

export default MainSecButtonCTA;