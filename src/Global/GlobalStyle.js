import { createGlobalStyle } from "styled-components";

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
        --clr-one: #ffffff;
        --clr-two: #000000;
        /* Background */  
        --bg-one: #ffffff;
        --bg-two: #171718;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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