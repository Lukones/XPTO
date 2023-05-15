import styled from "styled-components";

const Link = styled.a`
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    text-align: left;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    &:hover {
        color: #fff;
    }

    @media (max-width: 768px) {
       font-size: 13px;
    }

    @media (max-width: 481px) {
        font-size: 9px;
        margin: 0.1rem 0;
    }
`;

function Links(props) {
    return (
        <>  
            {/* Tarifas Móvil === Tarifas Móvil && TMovil(Móvil 24GB)  */}
            {props.text === props.tarifas && props.subtarifas.map((text, indice) => <Link key={indice} href={text === "Centro de ayuda" ? "/faq" : window.location.origin}>{text}</Link>)}
        </>)

};

export default Links;