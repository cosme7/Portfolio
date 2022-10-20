import styled from "styled-components";

export const Welcome = styled.section`
    max-width: 1920px;
    padding: var(--spacer-bg);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);
    background-color: var(--bg-two);  

    h1{
        max-width: 15ch;
        font-size: clamp(2rem, 4vw, 5rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-600);
        line-height: 1.2;
        letter-spacing: 1px;
        color: var(--clr-one);
        text-align: center;
    }

    span{
        font-weight: var(--fw-700);
        color: var(--clr-three);
    }  

    p{
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-align: center;
    }

    @media screen and (max-width:48em){
        padding: var(--spacer-md);
    }
`;

export const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: clamp(1rem, 1vw, 1.5rem);
    margin-inline: auto;
`;

export const About = styled.section`
    max-width: 1920px;
    margin-inline: auto;
    padding: var(--spacer-bg);
    background-color: var(--bg-two);

    @media screen and (max-width:48em){
        padding: var(--spacer-md);
    }
`;

export const AboutWrapper = styled.div`
    max-width: 1000px;
    margin-inline: auto;
    padding: 1rem;
    border-radius: 8px;
    border: 1.5px solid var(--bg-four);
    display: flex;
    justify-content: space-between;
    gap: clamp(1rem, 1vw, 1.5rem);
    background-color: var(--bg-three);

    img{
        width: 40%;
        border-radius: 8px;
        border: 4px solid transparent;
        background: 
        linear-gradient(50deg , crimson, var(--bg-four)) padding-box,
        linear-gradient(50deg , crimson, var(--bg-four)) border-box;
    }

    @media screen and (max-width:48em){
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width:30em){
        img{
            width: 100%;
        }
    }
`;

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(1rem, 1.5vw, 1.5rem); 

    h2{
        font-size: clamp(1.5rem, 2.5vw, 3rem);
    }

    p{
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        letter-spacing: 0.5px;
        color: var(--clr-one);
    }
`;

export const Tech = styled.section`
    max-width: 1920px;
    margin-inline: auto;
    padding: var(--spacer-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);
    background-color: var(--bg-two);

    p{
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-two);
        font-weight: var(--fw-400);
        color: var(--clr-one);
        text-align: center;
    }

    figure{
        width: 50%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(1rem, 1vw, 1.5rem);
    }

    img{
        width: 80px;
        aspect-ratio: 1;
        transition: transform 0.4s ease-in-out;
    }

    img:where(:hover, :focus){
        transform: scale(0.95);
    }

    @media screen and (max-width:48em){
        padding: var(--spacer-md);

        figure{
            width: 100%;
        }
    }
`;

export const Projects = styled.section`
    max-width: 1920px;
    margin-inline: auto;
    padding: var(--spacer-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-two);

    > * {
        margin-bottom: 3rem;
    } 
    
    figure{
        width: 80%;
        margin-inline: auto;
    }

    figure > * {
        margin-bottom: 2rem;
    }

    img{
        border-radius: 8px;
        border: 4px solid transparent;
        background: 
        linear-gradient(50deg , crimson, var(--bg-four)) padding-box,
        linear-gradient(50deg , crimson, var(--bg-four)) border-box;
    }

    @media screen and (max-width:48em){
        padding: var(--spacer-md);

        > * {
            margin-bottom: 0;
        }

        h2{
            margin-bottom: 2rem;
        }

        figure{
            width: 100%;
        }
    }
`;