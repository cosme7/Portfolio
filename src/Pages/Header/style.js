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