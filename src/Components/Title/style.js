import styled from "styled-components";

export const Title = styled.h2`
    max-width: 15ch;
    font-size: clamp(2rem, 4vw, 5rem);
    font-family: var(--ff-two);
    font-weight: var(--fw-600);
    line-height: 1.2;
    letter-spacing: 1px;
    color: var(--clr-one);
    text-align: center;

    span{
        font-weight: var(--fw-700);
        color: var(--clr-three);
    }  
`