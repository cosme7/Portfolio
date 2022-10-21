import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 80vh;
    padding: var(--spacer-md);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    background-color: var(--bg-two);

    h2{
        max-width: 20ch;
    }

    p{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-align: center;
    }
`;