import styled from "styled-components";
import ImageApp from "../../../../imgs/Rectangles/Rectangle 3.png";

const Div = styled.div`
    text-align: center;
    width: 100%;
    height: 65vh;

    @media (max-width: 1024px) {
        height: 100%;
    }

`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

function MainSecAppImg() {
    return (
        <Div>
            <Image src={ImageApp} alt="image-app"/>
        </Div>
    )
};

export default MainSecAppImg;