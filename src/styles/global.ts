import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429CC;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363F5F;
        --text-body: #969cb3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: 0px;
    }
    html {
        @media (max-width: 1080px) {
            // font-size: 16px;(desktop)/ padrao
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;// fonte ficam mais nitidas
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`