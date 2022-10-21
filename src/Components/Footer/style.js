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

    img{
        width: 70px;
        aspect-ratio: 1;
    }

    p{
        justify-self: flex-start;
        font-family: var(--ff-two);
        font-size: clamp(0.75rem, 1vw, 1.3rem);
        font-weight: var(--fw-700);
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

        img{
            width: 50px;
        }

        p{
            grid-area: 4 / 1;
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

    img{
        width: 50px;
        aspect-ratio: 1;
        transition: transform 0.4s ease-in-out;
    }

    img:where(:hover, :focus){
        transform: scale(1.1);
    }
`;

export const Nav = styled.nav`
    grid-area: 1 / 2;

    @media screen and (max-width:48em){
        grid-area: 2 / 1;
        width: 100%;
    }
`;

export const List= styled.ul`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: clamp(1rem, 2vw, 3rem);
    list-style: none;

    li{
        padding: 1rem 1.5rem;
        font-family: var(--ff-two);
        font-size: clamp(1rem, 1.05vw, 1.5rem);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-transform: uppercase;
    }

    li:where(:hover, :focus){
        outline: 4px solid var(--bg-four);
    }

    a{
        text-decoration: none;
    }

    @media screen and (max-width:48em){
        width: 100%;
        flex-direction: column;

        li{
            width: 100%;
            padding-block: 0.5rem;
            text-align: center;
            transition: none;
        }

        a:where(:hover, :focus){
            background-color: var(--bg-one);
        }

        a:where(:hover, :focus) li{
            font-weight: var(--fw-600);
            color: var(--clr-two);
        }

        a{
            width: 100%;
            border-radius: 5px;
            transition: none;
        }

        li:where(:hover, :focus){
            outline: none;
        }
    }
`;