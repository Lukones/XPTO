import styled from "styled-components";
import { GlobalTitle } from "../../../stylesGlobal";

const Div = styled.div`
    text-align: center;
    max-width: 1080px;
    width: 100%;

`;

const GlobalTitleEdit = styled(GlobalTitle)`

    @media (max-width: 768px) {
        margin: 1rem;
    }

`;

const SubTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

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

function MainSecApp() {
    return (
        <Div>
            <GlobalTitleEdit>
                ¡Tenemos una app!
            </GlobalTitleEdit>
            <SubTitle>
                ¡Descárgalo y analiza tu consumo ahora!
            </SubTitle>
        </Div>
    )
};

export default MainSecApp;