import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Sawarabi Mincho", serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    padding: 0;
    height: 100%;
    word-break: break-all;
    overflow-wrap: break-word;
    text-align: left;
    background-color: #fff;
  }

  h1 {
    margin: 0;
    font-weight: normal;
  }

  h2 {
    margin: 0;
    font-weight: normal;
  }

  input,textarea {
    width: 100%;
    border: 1px solid #ccc;
  }

  input {
    padding: 5px 10px;
    min-height: 40px;
  }

  textarea {
    padding: 10px;
    min-height: 100px;
  }

  button {
    padding: 5px 10px;
    border: none;
    background-color: gray;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover {
      opacity: 0.6;
    }
  }
`