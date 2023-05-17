import { textOption, Nav, Span, Button, Ul, OptionsList, } from "./style";
import { GlobalCentralizeDiv } from "../../stylesGlobal";
import { useState } from "react";

function HeaderMenu() {

    const [menuActive, setMenuActive] = useState("");

    function handleMenuOpen() {
        menuActive === "active" ? setMenuActive("") : setMenuActive("active")     
    };

    return (
        <GlobalCentralizeDiv>
            <Nav className={menuActive}>
                <Button onClick={handleMenuOpen}>
                    <Span></Span>
                </Button>
                <Ul>
                    {textOption.map((text, indice) =>
                        <OptionsList key={indice}>
                            <a href={window.location.origin + text.link}>{text.name}</a>
                        </OptionsList>)}
                </Ul>
            </Nav>
        </GlobalCentralizeDiv>
    )
};

export default HeaderMenu;