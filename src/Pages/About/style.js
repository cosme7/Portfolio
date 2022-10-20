import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    padding: var(--spacer-bg);
    margin-inline: auto;
    background-color: var(--bg-two);

    @media screen and (max-width:48em){
        padding: var(--spacer-md);
    }
`;

export const Wrapper = styled.div`
    width: 80%;
    padding: var(--spacer-md);
    margin-inline: auto;
    border-radius: 8px;
    border: 1.5px solid var(--bg-four);
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
    background-color: var(--bg-three);

    img{
        width: 25%;
        border-radius: 8px;
        border: 4px solid transparent;
        background: 
        linear-gradient(50deg , crimson, var(--bg-four)) padding-box,
        linear-gradient(50deg , crimson, var(--bg-four)) border-box;
    }

    @media screen and (max-width:48em){
        width: 100%;
        flex-direction: column;
        align-items: center;
        row-gap: 1rem;
    }

    @media screen and (max-width:30em){
        img{
            width: 100%;
        }
    }
`;

export const AbouTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 1rem;

    p{
        max-width: 55ch;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
    }

    @media screen and (max-width:48em){
        align-items: center;

        h2,
        p{
            text-align: center;
        }
    }
`;

export const Tech = styled.section`
    max-width: 1920px;
    padding: var(--spacer-bg);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-two);

    > * {
        margin-bottom: 3rem;
    }

    h2{
        max-width: 15ch;
        font-size: clamp(2rem, 4vw, 5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-600);
        line-height: 1.2;
        letter-spacing: 1px;
        color: var(--clr-one);
    }

    span{
        font-weight: var(--fw-700);
        color: var(--clr-three);
    }

    div{
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    }

    @media screen and (max-width:48em){
        div{
            width: 100%;
            grid-template-columns: 1fr;
        }
    }
`;