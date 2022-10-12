import styled from "styled-components";

export const Form = styled.form`
    width: 25%;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 1.5px solid var(--bg-four);
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
        min-height: 6vh;
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
        font-size: clamp(1rem, 1vw, 1.2rem);
        color: var(--clr-one);
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
        color: var(--clr-btn);
        cursor: pointer;
        border: none;
        outline: none;
        transition: none;
    }

    input[type="submit"]:where(:hover, :focus){
        background-color: var(--clr-btn);
        font-weight: var(--fw-700);
        color: var(--bg-four);
        outline: 2px solid var(--bg-four);
    }

    @media screen and (max-width:48em){
        width: 100%;
        padding: 1rem;
    }
`;