import styled, { createGlobalStyle } from "styled-components";
import Sun from '../Assets/sun.svg'
import Moon from '../Assets/moon.svg'


export const GlobalStyle = createGlobalStyle`

    :root{
        /* Font Weight */
        --fw-700: 700;
        --fw-600: 600;
        --fw-400: 400;
        /* Font Family */
        --ff-one: 'Poppins', sans-serif;
        --ff-two: 'DM Sans', sans-serif;
        /* Font Color */
        --clr-one: ${({theme}) => theme.textOne};
        --clr-two: ${({theme}) => theme.textTwo};
        --clr-three: blueviolet;
        --clr-btn: white;
        /* Background */
        --bg-one: ${({theme}) => theme.bgThree};
        --bg-two: ${({theme}) => theme.bgOne};
        --bg-three: ${({theme}) => theme.bgTwo};  
        --bg-four: ${({theme}) => theme.bgFour};
        /* Padding */
        --spacer-bg: 3rem 0.5rem 4rem;
        --spacer-xmd: 1rem 2rem;
        --spacer-md: 1rem 0.5rem 2rem;
        --spacer-sm: 1rem 0 2rem;
        /*  */
        --opSun: ${({theme}) => theme.opSun}
        --opMoon: ${({theme}) => theme.opMoon}
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    * > * {
        transition: background-color 0.3s linear;
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;

export const lightTheme = {
    textOne: '#363537',
    textTwo: '#ffffff',
    bgOne: '#ffffff',
    bgTwo: '#F2F4F1',
    bgThree: '#171718',
    bgFour: 'navy',
    opSun: 'translateY(100px)'
  }
  
export const darkTheme = {
    textOne: '#FAFAFA',
    textTwo: '#171718',
    bgOne: '#171718',
    bgTwo: '#1C1E22',
    bgThree: '#ffffff',
    bgFour: 'blueviolet',
    opMoon: 'translateY(-100px)'
  }

export const Btn = styled.button`
    width: 60px;
    aspect-ratio: 1;
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    background-color: ${({theme}) => theme.bgFour};
    overflow: hidden;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    position: fixed;
    z-index: 9999;
    bottom: 10rem;
    right: 3rem;
    transition: background-color 0.4s ease-in-out;

    ::before,
    ::after{
        width: 45px;
        aspect-ratio: 1;
        display: block;
        transition: transform 0.5s ease-in-out;
        position: absolute;
        top: 14%;
        left: 14%;
    }

    ::before{
        content: url(${Sun});
        transform: ${({ theme }) => theme.opSun};
    }

    ::after{
        content: url(${Moon});
        transform: ${({ theme }) => theme.opMoon};
    }

    @media screen and (max-width:48em){
        width: 55px;    
        bottom: 5rem;
        right: 1rem;

        ::before,
        ::after{
            width: 40px;
        }
    }
`;