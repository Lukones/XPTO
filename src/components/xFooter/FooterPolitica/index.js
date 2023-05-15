import styled from "styled-components";

const LinksPoliticas = ['Aviso legal', 'Política de cookies', 'Política de privacidad', 'Términos y condiciones'];

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icons = styled.i`
    font-size: 40px;
    margin: 1rem 1rem;
    cursor: pointer;
    &:hover {
        color: #fff
    }

    @media (max-width: 481px) {
        font-size: 32px;
    }

    @media (max-width: 481px) {
        font-size: 32px;
    }
`;

const Copy = styled.p`
    font-size: 9px;
    margin-top: 1rem;

    @media (max-width: 768px) {
        font-size: 14px;
    }

`;

const Link = styled.a`
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
        color: #fff
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 481px) {
        font-size: 9px;
        text-align: center;
        margin: 0 1rem;
    }
`;

function PoliticasIcons(){
    return (
    <>
        <Div>
            <Icons className="fa-brands fa-square-facebook"></Icons>
            <Icons className="fa-brands fa-youtube"></Icons>
            <Icons className="fa-brands fa-linkedin"></Icons>
            <Icons className="fa-brands fa-twitter"></Icons>
        </Div>

        <Div>{LinksPoliticas.map((text, indice) => <Link key={indice}>{text}</Link>)}</Div>

        <Div><Copy>@EMPRESAXPTO - All Rights Reserved - 2023</Copy></Div>
    </>

    )
};

export default PoliticasIcons;