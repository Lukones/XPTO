import styled from "styled-components";
import ImageApp from "../../../../imgs/Rectangles/Rectangle 2.png";

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
    object-position: center top;
    height: 100%;
    width: 100%;
`;

function MainSecFriendImg() {
    return (
        <Div>
            <Image src={ImageApp} alt="image-app"/>
        </Div>
    )
};

export default MainSecFriendImg;