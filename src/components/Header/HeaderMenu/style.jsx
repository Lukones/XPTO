import { styled } from "styled-components";

export const textOption = [
    { id: 1, name: 'Plan Amigo', link: '/friend' },
    { id: 2, name: 'Regalo', link: '/sport' },
    { id: 3, name: 'Preguntas', link: '/faq' },
];

export const Nav = styled.nav`
    max-width: 1080px;
    margin: 0 auto;

    @media (max-width: 768px) {
    
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &.active {
            Span {
                border-top-color: transparent;

                &::before {
                    margin-top: -10px;
                }
              
                &::after {
                    margin-top: 5px;
                }
            }
        }

        &.active {
            Span::after {
                transform: rotate(135deg);
            }
            
        }

        &.active {
            Span::before {
                transform: rotate(-135deg);
                top: 7px;
            }
        }

        &.active {
            Ul {
                visibility: initial;
        } 
    }
`;

export const Span = styled.span`
    @media (max-width: 768px) {
        border-top: 2px solid;
        width: 20px;

        &::before,
        &::after {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            margin-top: 5px;
            background-color: #000;
            position: relative;
            transition: .4s;
        }

    }
`;

export const Button = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        padding: .5rem 1rem;
        font-size: 1rem;
        background: none;
        cursor: pointer;
        border: none;
        color: #000;
        margin-right: 1rem;
        align-items: center;
        justify-content: center;
    }
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
        display: block;
        position: absolute;
        width: 100%;
        z-index: 999;
        top: 65px;
        padding-top: 100px;
        right: 0px;
        background: linear-gradient(to right, #81A4FC 0%, #A174FC 100%);;
        height: 100vh;
        text-align: center;
        visibility: hidden;
    }

    @media (max-width: 481px) {
        top: 50px;
        
    }
`;

export const OptionsList = styled.li`
  padding: 0 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  a {
    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    
    &:hover {
      color: #fff;
      cursor: pointer;
      scale: 1.15;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    a {
            font-size: 34px;
    }

}`;  
