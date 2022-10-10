import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    padding: var(--spacer-bg);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(2rem, 2vw, 2.5rem);
    background-color: var(--bg-two);

    @media screen and (max-width:48em){
        padding: var(--spacer-sm);

        h2{
            margin-bottom: 0;
        }
    }
`;

export const CardBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    row-gap: 4rem;

    @media screen and (max-width:48em){
        row-gap: 2rem;
    }
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    button{
        padding: 0.5em 1.2em;
        border-radius: 10px;
        background-color: var(--bg-four);
        text-align: center;
        cursor: pointer;
        border: none;
    }

    a{        
        font-size: clamp(1rem, 1.5vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-decoration: none;
        outline: none;
    }

    button:where(:hover, :focus){
        background-color: var(--bg-one);
        color: var(--clr-three);
    }

    button:where(:hover, :focus) a{
        font-weight: var(--fw-700);
        color: var(--clr-three);
    }
`;