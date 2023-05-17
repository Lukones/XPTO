import styled from "styled-components";
import MainSecTitleCarousel from "./MainSecTitleCarousel";
import CarouselImgs from "./MainSecCarousel";
import { GlobalSection } from "../../stylesGlobal";

const GlobalSection5 = styled(GlobalSection)`
    position: relative;
`;

function Section05() {
    return (
        <GlobalSection5>
            <MainSecTitleCarousel />
            <CarouselImgs />
        </GlobalSection5>
    )
};

export default Section05;