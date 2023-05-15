import style from "styled-components";
import { GlobalCentralizeDiv } from "../../stylesGlobal";

const person = "person";
const more = "more_vert";

const Icon = style.div`
    width: 100%;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;

    a {
        text-decoration: none;
        color: #000;
        &:hover {
            color: #fff;
            cursor: pointer;
        }
    }  

    .more {
        display: none;
    }


    .material-icons {
        margin: 0 2.3rem 0 0;
        font-size: 28px;

        @media (max-width: 1024px) {
            margin: 0 2.3rem 0 0;
            .more {
                display: none;
            }
        }

        @media (max-width: 768px) {
            display: inline;
            margin: 0 2rem 0 0;
        }
        
        @media (max-width: 481px) {
            font-size: 24px;
            margin: 0 1rem;
        }
    }
`;

function OptionsIconHeader() {
    return (
       <>
            <GlobalCentralizeDiv>
                <Icon>
                    <a href="/"><i className="material-icons">{person}</i></a>
                    <a href="/"><i className="material-icons more">{more}</i></a>
                </Icon>
            </GlobalCentralizeDiv>
        </>
    )
};

export default OptionsIconHeader;

