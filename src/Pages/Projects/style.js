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
`;