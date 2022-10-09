import styled from "styled-components";

export const Card_About = styled.article`
    padding: var(--spacer-md);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    transition: background-color 0.5s ease-in-out;
    background-color: var(--bg-three);

    img{
        width: 80px;
        aspect-ratio: 1;
    }

    h3{
        font-size: clamp(1.25rem, 2vw, 2rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-600);
        line-height: 1.2;
        letter-spacing: 1px;
        color: var(--clr-three);
        text-align: center;
    }

    p{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-500);
        color: var(--clr-one);
        text-align: center;
    }

    :where(:hover, :focus){
        background-color: #F2F4F1;
    }

    :where(:hover, :focus) img{
        border-radius: 8px;
        background-color: var(--bg-two);
    }

    :where(:hover, :focus) p{
        color: var(--clr-two);
    }
`;