import styled from "styled-components";

export const Btn = styled.button`
    padding: 0.5em 1em;
    border-radius: 15px;
    font-size: clamp(1rem, 1vw, 1.2rem);
    font-family: var(--ff-two);
    font-weight: var(--fw-400);
    background-color: var(--bg-four);
    color: var(--clr-btn);
    outline: none; 
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;

    :where(:hover, :focus){
        background-color: var(--clr-btn);
        font-weight: var(--fw-500);
        color: var(--bg-four);
        outline: 2px solid var(--bg-four);
        transform: scale(0.95);
    }
`;