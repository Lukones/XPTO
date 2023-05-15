import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 3rem;

    @media (max-width: 768px) {
        margin: 0;
    }

`;

const Title = styled.h1`
    color: black;
    font-weight: 400;
    font-size: 24px;

    @media (max-width: 1024px) {
        font-size: 22px;
        text-align: left;
        margin: 1rem 0 0.5rem;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
    
    @media (max-width: 481px) {
        font-size: 14px;
    }
`;

const SubTitle = styled.h2`
    color: black;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;

    @media (max-width: 1024px) {
        text-align: left;
        font-size: 26px;
    }

    @media (max-width: 768px) {
        font-size: 22px;
        width: 176px;
    }
    
    @media (max-width: 481px) {
        font-size: 18px;
        padding-right: 2rem;
        width: 176px;
    }
`;

function MainSecLeft(){
    return (
        <Div>
            <Title>EMPRESA XPTO</Title>
            <SubTitle>La tienda que te da premios</SubTitle>
        </Div>
    )
};

export default MainSecLeft;