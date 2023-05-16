import styled, { keyframes } from "styled-components";
import icon1 from "../iconService/icon1.png";
import icon2 from "../iconService/icon2.png";
import icon3 from "../iconService/icon3.png";
import icon4 from "../iconService/icon4.png";

const Icons = [icon1, icon2, icon3, icon4];

const SubTitlesIcons = [
    "Los mejores servicios al mejor precio", 
    "La mejor cobertura de Vodafone", 
    "Acumula GB para el siguiente mes", 
    "Comparte GB con tus amigos de Fi"
];

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 768px) {
        gap: 0rem;
    }
`;

const bounce = keyframes`
    
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }

    40%, 43% {
        transform: translate3d(0, -20px, 0);
    }

    70% {
        transform: translate3d(0, -10px, 0);
    }

    90% {
        transform: translate3d(0,-5px,0);
    }
`;

const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 250px;

    &:hover {
        /* Inserimos a constante bounce que terá a duração de 0.8s e utilizará o easing ease-in, 
        que começa lento com a imagem e acelera no final, e o valor both para suavizar a animação. */
        animation: ${bounce} 0.8s ease-in both;
    }

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;
        margin: 0;
    }
`;

const P = styled.p`
    font-size: 1.5rem;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        font-size: 22px;
    }

    @media (max-width: 768px) {
        font-size: 19px;
    }

    @media (max-width: 481px) {
        font-size: 16px;
    }
`;

function MainSecIconsService() {
    return (
        <Div>
        {Icons.map((text, indice) => 
            <DivImg key={indice}>
                <img  src={text} alt={text}/>
                <P>{SubTitlesIcons[indice]}</P>
            </DivImg>)
        }
        </Div>
        )
};

export default MainSecIconsService;