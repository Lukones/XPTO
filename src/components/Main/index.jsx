import styled from "styled-components";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";
import Section06 from "./Section06";

const MainContainer = styled.main`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-weight: 400;
`;

function Main() {
    return (
        <MainContainer>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
            <Section06 />
        </MainContainer>
    )
};

export default Main;

