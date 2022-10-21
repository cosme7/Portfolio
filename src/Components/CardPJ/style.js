import styled from "styled-components";

export const Card = styled.article`
    max-width: 500px;
    padding: 0.5rem 0.5rem 1rem;
    border: 1.5px solid var(--bg-four);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(1rem, 1vw, 1.2rem);
    background-color: var(--bg-three);

    @media screen and (max-width:48em){
        max-width: 100%;
    }

    img{
        border-radius: 5px;
    }

    h3{
        font-size: clamp(1.25rem, 2vw, 1.5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-600);
        line-height: 1.2;
        letter-spacing: 1px;
        color: var(--clr-one);
    }

    p{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-500);
        color: var(--clr-one);
    }

    span{
        font-weight: var(--fw-700);
        color: var(--clr-three);
    }
`;

export const BtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button{
        padding: 0.5em 1em;
        border: 5px solid;
        border-image: linear-gradient(50deg , crimson, var(--bg-four)) 1;
        background-color: var(--bg-two);
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }

    button:where(:hover, :focus){
        outline: 2px solid red;
        transform: scale(0.95);
    }

    a{        
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-700);
        color: var(--clr-one);
        text-decoration: none;
        outline: none;
    }
`;