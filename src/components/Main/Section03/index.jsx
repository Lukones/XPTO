import styled from "styled-components";
import MainSecApp from "./MainSecApp";
import MainSecAppImg from "./MainSecAppImg";
import MainSecAppButton from "./MainSecAppButton";
import { GlobalSection } from "../../stylesGlobal";

const GlobalSection3 = styled(GlobalSection)`
    position: relative;
`;

function Section03() {
    return (
        <GlobalSection3 id="app">
            <MainSecApp />
            <MainSecAppImg />
            <MainSecAppButton />
        </GlobalSection3>
    )
};

export default Section03;