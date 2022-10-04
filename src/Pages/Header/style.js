import styled from "styled-components";

export const Container = styled.section`
    --spacer-sm: 1rem 2rem;
    max-width: 1920px;
    margin: 0 auto;
    padding: var(--spacer-sm);
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
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }
`;