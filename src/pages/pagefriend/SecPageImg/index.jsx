import styled from "styled-components";
import ImageApp from "../../../imgs/Rectangles/Rectangle 1-1.png";

const Div = styled.div`
    text-align: center;
    width: 100%;
    height: 650px;

    @media (max-width: 1024px) {
        height: 100%;
        clip-path: none;
    }

    @media (max-width: 768px) {
        padding-top: 65px;
    }

    @media (max-width: 481px) {
        padding-top: 50px;
    }
`;

const Image = styled.img`
    object-fit: cover;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 67%);
    height: 100%;
    width: 100%;
`;

function SecPageImg() {
    return (
        <Div>
            <Image src={ImageApp} alt="image-app"/>
        </Div>
    )
};

export default SecPageImg;