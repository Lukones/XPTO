import styled from "styled-components";
import OptionsHeader from "./HeaderOptions";
import OptionsIconHeader from "./HeaderOptionsIcon";

const HeaderContainer = styled.header`
    background: linear-gradient(to right, #5f97fecc 0%, #8c53fecc 100%);
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    font-weight: 400;
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);

    @media (max-width: 1024px) {
        height: 80px;
        padding: 0 0;
    }

    @media (max-width: 768px) {
        height: 65px;
        padding: 0 0;
    }

    @media (max-width: 481px) {
        height: 50px;
        padding: 0 0;
    }

`;

const DivContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
`;

function Header() {
    return (
        <HeaderContainer>
            <DivContainer>
                <OptionsHeader />
                <OptionsIconHeader />
            </DivContainer>
        </HeaderContainer>
    )
};

export default Header;