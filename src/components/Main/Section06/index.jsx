import styled from "styled-components";
import MainSecIconsService from "./MainSecIconsService";
import { GlobalSection, GlobalTitle } from "../../stylesGlobal";

const GlobalSection6 = styled(GlobalSection)`
    flex-direction: row;
`;

const Div = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;

const GlobalTitleSec6 = styled(GlobalTitle)`
    margin: 4.5rem 0 1rem;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }

`;

function Section06() {
    return (
        <GlobalSection6>
            <Div>
                <GlobalTitleSec6>¿Qué ofrecemos?</GlobalTitleSec6>
                <MainSecIconsService />
            </Div>
        </GlobalSection6>
    )
};

export default Section06;