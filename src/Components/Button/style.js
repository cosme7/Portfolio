import styled from "styled-components";

export const Btn = styled.button`
    padding: 0.5em 1em;
    border-radius: 15px;
    font-size: clamp(1rem, 1vw, 1.2rem);
    font-family: var(--ff-two);
    font-weight: var(--fw-400);
    background-color: var(--bg-four);;
    color: var(--clr-one);
    outline: none; 
    border: none;
    cursor: pointer;
    text-decoration: none;

    :where(:hover, :focus){
        background-color: var(--bg-one);
        font-weight: var(--fw-500);
        color: var(--clr-three);
    }
`;