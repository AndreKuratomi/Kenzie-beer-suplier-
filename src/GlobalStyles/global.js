import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, main, section, article, header, figure, img, figcaption, button, ul, li, div, h1, p, span {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 1rem;
    }
    
    h1 {
        margin-bottom: 1rem;
        text-align: center;
    }
    #adega {
        text-align: center;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    li {
        list-style-type: none;
    }

    article {
        border: 2px solid #000;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem;
        margin-bottom: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1rem;
        width: 300px;
    }

    figure {
        display: flex;
        justify-content: center;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
    figcaption {
        display: none;
    }
    img {
        margin-bottom: 1rem;
        height: 200px;
        width: auto;
    }

    p {
        margin-bottom: 0.5rem;
    }
    span {
        font-weight: bold;
    }

    button {
        padding: 0.5rem 2rem;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
    #buttons {
        display: flex;
        justify-content: space-around;
        padding: 1rem 
    }

`;
