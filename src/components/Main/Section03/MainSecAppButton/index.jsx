import styled from "styled-components";
import { GlobalButton } from "../../../stylesGlobal";

const Div = styled.div`
    text-align: center;
    max-width: 1080px;
`;

const GlobalButtonGoogle = styled(GlobalButton)`
    position: absolute;
    top: 97%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #BFBFBF;
        i, p { color: black };
    }

    i {
        font-size: 33px;
        text-align: left;
        margin: 0 0.5rem
    }

    p {
        color: #fff;
        margin-bottom: 0;
    }

    @media (max-width: 1024px) {
        top: 95%;
    }

    @media (max-width: 768px) {
        width: 208px;
        height: 44px;
        font-size: 16px;
        font-weight: 200;
        margin: 0 0 1.5rem;
        top: 99%;

        i {
            font-size: 23px;
            text-align: left;
            margin: 0 0.5rem
        }
    }
    
`;

function MainSecAppButton() {
    return (
        <Div>
            <GlobalButtonGoogle>
                <i className='fab fa-google-play'></i>
                <p>Google Play</p>
            </GlobalButtonGoogle>
        </Div>
    )
};

export default MainSecAppButton;