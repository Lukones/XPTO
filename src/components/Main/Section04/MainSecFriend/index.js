import styled from "styled-components";
import { GlobalTitle } from "../../../stylesGlobal";

const Div = styled.div`
    text-align: center;
    max-width: 1080px;
`;

const GlobalTitleSec4 = styled(GlobalTitle)`
    margin: 4rem 0 1rem 0;
    text-transform: uppercase;

    @media (max-width: 768px) {
        margin: 3.5rem 0 1rem 0;
    }

    @media (max-width: 481px) {
        margin: 3rem 0 1rem 0;
    }
`;

const SubTitle = styled.h2`
    
    font-weight: 400;
    margin: 0.5rem 0rem;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    line-height: 1.5;
    width: 100%;

    @media (max-width: 1024px) {
        font-size: 24px;
    }

    @media (max-width: 768px) {
        font-size: 19px;
        margin-bottom: 1.5rem;
        padding: 0rem 1.5rem;
    }

    @media (max-width: 481px) {
        font-size: 16px;
        margin-bottom: 1.5rem;
        padding: 0rem 1.5rem;
    }
`;

function MainSecFriend() {
    return (
        <Div>
            <GlobalTitleSec4>
            nuevo plan amigo
            </GlobalTitleSec4>
            <SubTitle>
            Invita a un amigo y gana 15€ para ti y para él. Trae a tantos como quieras, ¡Es ilimitado!
            </SubTitle>
        </Div>
    )
};

export default MainSecFriend;