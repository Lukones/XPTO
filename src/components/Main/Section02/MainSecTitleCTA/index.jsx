import styled from "styled-components";
import { GlobalTitle } from "../../../stylesGlobal";

const GlobalTitleSec2 = styled(GlobalTitle)`
    margin: 2.5rem;

    @media (max-width: 768px) {
        margin: 2rem 0;
    }

    @media (max-width: 481px) {
        margin: 1.5rem 0;
    }
`;

function MainSecTitleCTA(){
    return <GlobalTitleSec2>¿A qué esperas? ¡Elige tu regalo!</GlobalTitleSec2>
};

export default MainSecTitleCTA;