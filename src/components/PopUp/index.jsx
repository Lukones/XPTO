import styled  from "styled-components";
import { GlobalButton } from "../stylesGlobal";

const Section = styled.section`
    display: flex;
    position: relative;
    z-index: 999999;
    background-color: #00000080;
    flex-direction: column;
    align-items: center;
    &:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000080;
    }
`;

const Div = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9999999;
    width: 340px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: solid 1px #000;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.25);
    border-radius: 5%;

    h1 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    div {
        display: flex;
    }

    input {
        width: 259.6px;
        height: 70px;
        margin: 0.5rem;
        border: solid 2px #B3B3B3;
        border-radius: 5px;
        padding-left: 1rem;
        font-size: 1rem;
        font-weight: 600;
    }


    @media (max-width: 481px) {
        width: 310px;
        
    }
`;

const GlobalButtonPopUp = styled(GlobalButton)`
    width: 125px;
    height: 50px;
    color: #fff; 
    margin: 1.5rem 0.3rem 0;
    font-size: 1rem;
    font-weight: 500;
    
    &.Submit {
        border: solid 1px #000;
        background-color: #fff;
        color: #000;
        
        &:hover {
            color: #fff;
            background-color: #000;
        }
    }

    @media (max-width: 481px) {
        box-shadow: none;
    }
`;


function popDesign({onClose}){

    return (
        <Section>
            <Div>
                <h1>TESTAR COBERTURA</h1>
                <input type='text' placeholder='Teléfono'></input>
                <input type='text' placeholder='Código postal'></input>
                <div>
                    <GlobalButtonPopUp className='Submit'>VERIFICAR</GlobalButtonPopUp>
                    <GlobalButtonPopUp onClick={onClose}>CANCELAR</GlobalButtonPopUp>
                </div>
            </Div>
        </Section>

    )
};

export default popDesign;