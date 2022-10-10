import styled from "styled-components";

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

    a{
        padding: 1rem 1.5rem;
        font-family: var(--ff-two);
        font-size: clamp(1rem, 1.05vw, 1.5rem);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-transform: uppercase;
        text-decoration: none;
    }

    a:where(:hover, :focus){
        outline: 4px solid var(--bg-four);
    }

    @media screen and (max-width:48em){
        width: 100%;
        flex-direction: column;

        li{
            width: 100%;
            padding-block: 0.5rem;
            border-radius: 5px;
            text-align: center;
        }

        li:where(:hover, :focus){
            background-color: var(--bg-one);
        }

        li:where(:hover, :focus) a{
            font-weight: var(--fw-600);
            color: var(--clr-two);
        }

        a{
            width: 100%;
        }

        a:where(:hover, :focus){
            outline: none;
        }
    }
`;