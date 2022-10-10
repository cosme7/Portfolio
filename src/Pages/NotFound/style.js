import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    padding: var(--spacer-bg);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);
    background-color: var(--bg-two);

    p{
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-align: center;
    }
`;