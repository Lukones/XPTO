import styled from "styled-components";
import MainSecLeft from "./MainSecLeft";
import MainSecRight from "./MainSecRight";
import { GlobalSection, GlobalCentralizeDiv  } from "../../stylesGlobal";

const GlobalSection01 = styled(GlobalSection)`
    flex-direction: row;
    background-color: #F5F5F5;    
`;

const GlobalCentralizeDiv01 = styled(GlobalCentralizeDiv)`
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        justify-content: space-around;
        align-items: flex-start;
        padding-bottom: 1.5rem;
    }

    @media (max-width: 481px) {
        justify-content: space-around;
        align-items: flex-start;
        padding-bottom: 1.5rem;
    }

`;

function Section01(){
    return (
        <GlobalSection01>
            <GlobalCentralizeDiv01>
                <MainSecLeft />
                <MainSecRight />
            </GlobalCentralizeDiv01>
        </GlobalSection01>
    )
};

export default Section01;