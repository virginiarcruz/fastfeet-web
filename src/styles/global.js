import { createGlobalStyle } from 'styled-components/macro';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');


  *,
  *::before,
  *::after {
    outline-color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *:focus {
    outline-color: #ddd;
  }

  html, body, #root {
    height: 100%;
    display: flex;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a { text-decoration: none; }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
