import styled from "styled-components";

export const List= styled.ul`
    display: flex;
    align-items: center;
    gap: clamp(1rem, 2vw, 3rem);
    list-style: none;

    a{
        padding: 1rem 1.5rem;
        font-family: var(--ff-two);
        font-size: clamp(1rem, 1.05vw, 1.5rem);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-transform: uppercase;
        text-decoration: none;
    }

    a:where(:hover, :focus){
        outline: 4px solid blueviolet;
    }

    @media screen and (max-width:46em){
        display: none;
    }
`;

export const Btn = styled.button`
    display: none;
    border: none;
    cursor: pointer;
    position: fixed;
    z-index: 9999;
    right: 2rem;

    @media screen and (max-width:46em){
        display: block;
    }
`;

export const Txt = styled.span`
    display: none;
`;

export const MenuBG = styled.div`
    width: 5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    position: fixed;
    top: 1.5rem;
    right: 1rem;
    z-index: 1000;
    transform: ${({open}) => (open ? 'scale(1000)' : 'scale(0)')};
    transition: transform 0.8s ease-in-out;
    background-image: linear-gradient( rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5) );
`;

export const Icon = styled.span`
    width: 40px;
    height: 4.5px;
    border-radius: 20px;
    background-color: ${({open}) => (open ? 'var(--bg-two)' : 'var(--bg-one)')};
    transition: 0.5s all ease-in-out;
    position: relative;
    display: block;

    ::before,
    ::after{
        content: '';
        width: 40px;
        height: 4.5px;
        border-radius: 20px;
        background-color: var(--bg-one);
        transform-origin: 35px;
        transition: 0.4s all ease-in-out;
        display: block;
        position: absolute;
        right: 0;
    }

    ::before{
        top: 0.7em;
        transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    ::after{
        bottom: 0.7em;
        transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
`;

export const Mobile = styled.nav`
    width: 60%;
    min-height: 100vh;
    padding: 5rem 1rem 0 0;
    display: none;
    background-color: var(--bg-two);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    z-index: 2000;

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
    }

    li{
        width: 100%;
        padding-block: 0.5rem;
        text-align: right;
    }

    li:where(:hover, :focus){
        background-color: var(--bg-one);
    }

    li:where(:hover, :focus) a{
        font-weight: var(--fw-600);
        background: linear-gradient(50deg, #00C0FD, #E70FAA);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    a{
        padding-right: 0.5rem;
        font-family: var(--ff-two);
        font-size: 1.2rem;
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-transform: uppercase;
        text-decoration: none;
    }

    a:hover{
        font-weight: var(--fw-600);
        background: linear-gradient(50deg, #00C0FD, #E70FAA);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    @media screen and (max-width:46em){
        display: block;
    }
`;