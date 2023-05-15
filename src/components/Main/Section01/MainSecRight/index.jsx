import styled from "styled-components";
import Logo from "../../../../imgs/Logo/Logo.png";

const SecImg = styled.img`
    width: 350px;
    height: 350px;
    margin: 0 3rem;

    @media (max-width: 1024px) {
        max-width: 275px;
        max-height: 275px;
        margin: 0;
    }

    @media (max-width: 768px) {
        max-width: 200px;
        max-height: 200px;
    }

    @media (max-width: 481px) {
        max-width: 150px;
        max-height: 150px;
    }

    
`;

function MainSecRight() {
    return (
        <SecImg src={Logo} alt="logo"/>
     )
};

export default MainSecRight;