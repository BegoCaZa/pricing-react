import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }
    html {
    scroll-behavior: smooth;
    }

    img {
    display: block;
    max-width: 100%;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    nav ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    }

    body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    background-color: #F7F7FE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    //Web
  @media (min-width: 1080px) {
    justify-content: flex-start;
    padding-top: 2rem;
    
  }
    }

     
`;
