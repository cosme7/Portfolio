import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    padding: var(--spacer-md);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    background-color: var(--bg-two);

    h2{
        font-size: clamp(2rem, 4vw, 5rem);
        font-family: var(--ff-one);
        font-weight: var(--fw-600);
        line-height: 1.2;
        letter-spacing: 1px;
        color: var(--clr-one);
        text-align: center;
    }

    span{
        font-weight: var(--fw-700);
        color: blueviolet;
    }

    p{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-align: center;
    }
`;

export const Form = styled.form`
    width: 25%;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 1.5px solid #26292D;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    background-color: var(--bg-three);

    label{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
    }

    input{
        margin-bottom: 1rem;
    }

    input[type="text"],
    input[type="email"]{    
        width: 100%;
        min-height: 5vh;
        padding-inline: 1rem;
        border-radius: 8px;
        border: 1px solid #A0A0A1;
        font-size: clamp(1rem, 1vw, 1.2rem);
        background-color: var(--bg-three);
        color: var(--clr-one);
    }

    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    textarea::placeholder{
        color: var(--clr-one);
        opacity: 0.7;
    }

    textarea{
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: 1px solid #A0A0A1;
        background-color: var(--bg-three);
    }

    input:focus,
    textarea:focus{
        outline: 2px solid var(--bg-four);
    }

    input[type="submit"]{
        padding: 0.5em 1em;
        border-radius: 8px;
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        background-color: var(--bg-four);
        color: var(--clr-one);
        cursor: pointer;
        border: none;
        outline: none;
    }

    input[type="submit"]:where(:hover, :focus){
        font-weight: var(--fw-700);
        background-color: var(--bg-one);
        color: var(--clr-three);
    }

    @media screen and (max-width:48em){
        width: 100%;
        padding: 1rem;
    }
`;