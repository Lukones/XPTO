import styled from "styled-components";
import FooterTarifas from "./FooterTarifas";
import FooterPolitica from "./FooterPolitica";

const FooterContainer = styled.footer`
    background: linear-gradient(to right, #5f97fecc 0%, #8c53fecc 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0 1rem 0;
    font-weight: 400;
    border-top: 1px solid rgb(255, 255, 255, 0.2);

    @media (max-width: 481px) {
        padding: 1rem;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterTarifas />
            <FooterPolitica />
        </FooterContainer>
    )
};

export default Footer;