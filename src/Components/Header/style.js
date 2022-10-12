import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: var(--spacer-xmd);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-two);
    position: relative;

    h1{
        font-size: clamp(2rem, 3vw, 3.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        letter-spacing: 2px;
        background: linear-gradient(50deg, #00C0FD, #E70FAA);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    @media screen and (max-width:48em){
        padding: var(--spacer-md);
    }
`;

export const Skip = styled.a`
    padding: 0.5em 1em;
    border-radius: 5px;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-family: var(--ff-two);
    font-weight: var(--fw-400);
    color: white;
    background-color: blueviolet;
    position: absolute;
    left: 2rem;
    bottom: -2rem;
    text-decoration: none;
    transform: translateY(-400%);
    transition: transform 0.5s ease-in-out;
    outline: none;

    :focus-visible{
        font-weight: var(--fw-700);
        background-color: white;
        color: var(--clr-three);
        transform: translateY(0);
    }
`;

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
        outline: 4px solid var(--bg-four);
    }

    @media screen and (max-width:48em){
        display: none;
    }
`;

export const Btn = styled.button`
    display: none;
    border: none;
    cursor: pointer;
    position: fixed;
    z-index: 8000;
    right: 0.5rem;

    @media screen and (max-width:48em){
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
    transition: transform 0.3s ease-in-out;
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
    padding: 5rem 0.5rem 0;
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
        gap: 1.5rem;
        list-style: none;
    }

    li{
        padding: .5rem .5rem .5rem 0;
        font-family: var(--ff-two);
        font-size: clamp(1rem, 1.05vw, 1.5rem);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-transform: uppercase;
        transition: none;
        text-align: right;
    }

    a{
        width: 100%;
        border-radius: 5px;
        transition: none;
        text-decoration: none;
    }

    a:where(:hover, :focus){
        background-color: var(--bg-one);
    }

    a:where(:hover, :focus) li{
        font-weight: var(--fw-700);
        color: var(--clr-two);
    }

    @media screen and (max-width:48em){
        display: block;
    }
`;