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
    padding-top: 20px;
    padding-bottom: 20px;
    background-image: url(/assets/images/bg-top.svg);
    background-position: top right;
    background-repeat: no-repeat;
    background-size:90%;

    //Web
  @media (min-width: 1080px) {
    justify-content: center;
  }
    }

     
`;
