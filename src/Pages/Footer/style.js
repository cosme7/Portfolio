import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: var(--spacer-xmd);
    display: grid;
    align-items: center;
    row-gap: clamp(1.5rem, 1.5vw, 2rem);
    grid-template-columns: 1fr 3fr;
    background-color: var(--bg-two);

    h3{
        max-width: 7ch;
        font-size: clamp(1.5rem, 2vw, 2.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-700);
        letter-spacing: 2px;
        background: linear-gradient(50deg, #E70FAA, #00C0FD);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    p{
        justify-self: flex-start;
        padding-right: 1.5rem;
        font-family: var(--ff-two);
        font-size: clamp(1rem, 1vw, 1.3rem);
        font-weight: var(--fw-400);
        letter-spacing: 1px;
        color: var(--clr-one);
        text-transform: uppercase;
        text-align: end;
    }

    @media screen and (max-width:48em){
        padding: var(--spacer-md);
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        place-items: center;

        p{
            grid-area: 4 / 1;
            padding: 0;
            justify-self: center;
        }
    }
`;

export const Social = styled.nav`
    grid-area: 2 / 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(1rem, 1.5vw, 2rem);

    @media screen and (max-width:48em){
        grid-area: 3 / 1;
        justify-content: center;
    }

    :where(:hover, :focus){
        filter: drop-shadow(0 0 3px var(--bg-one));
    }

    img{
        width: 50px;
        aspect-ratio: 1;
    }

    img:where(:hover, :focus){
        transform: scale(1.1);
        filter: drop-shadow(0 0 3px var(--bg-one));
    }
`;