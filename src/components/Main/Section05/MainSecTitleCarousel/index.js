import styled from "styled-components";
import { GlobalTitle } from "../../../stylesGlobal";

const GlobalTitleSec5 = styled(GlobalTitle)`
    font-weight: normal;
    margin-top: 4rem;

    @media (max-width: 1024px) {
        strong {
            display: block;
          }
    }

    @media (max-width: 768px) {
        margin-top: 3.5rem;
    }

    @media (max-width: 481px) {
        margin-top: 3rem;
    }
`;

function MainSecTitleCarousel() {
    return (

            <GlobalTitleSec5>EMPRESA XPTO <strong>CON EL DESPORTE ESPAÑOL</strong></GlobalTitleSec5>
    
    )
};

export default MainSecTitleCarousel;