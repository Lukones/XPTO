import styled from "styled-components";
import MainSecFriend from "./MainSecFriend";
import MainSecFriendImg from "./MainSecFriendImg";
import { GlobalButton, GlobalSection  } from "../../stylesGlobal";

const GlobalSection4 = styled(GlobalSection)`
    position: relative;
`;

const GlobalButtonPlanAmigo = styled(GlobalButton)`
    position: absolute;
    top: 97%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1024px) {
        top: 96%;
    }

    @media (max-width: 768px) {
        width: 208px;
        height: 44px;
        font-size: 16px;
        font-weight: 200;
        margin: 0 0 1.5rem;
        top: 99%;
    }
`;

function Section04() {
    return (
        <GlobalSection4>
            <MainSecFriend />
            <MainSecFriendImg />
            <a href="friend">
                <GlobalButtonPlanAmigo>Descubre el plan amigo</GlobalButtonPlanAmigo>
            </a>
        </GlobalSection4>
    )
};

export default Section04;