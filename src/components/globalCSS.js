import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* Import Google Fonts (currently Roboto Condensed only) */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&display=swap');

    :root {
        --primary: #FF7252;
        --black: #292929;
        --white: #FFF;
        --grey: #9D9D9D;
    }

    body {
        font-family: 'Roboto Condensed', sans-serif;
        letter-spacing: 0.1em;
    }

    main {

    }

    section {

    }

    h1 {
         color: var(--primary);
         font-weight: bold;
         text-transform: uppercase;
         font-size: 2.7rem;
    }

    h2 {
        color: var(--black);
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 59px;
    }

    h3 {

    }

    h4 {

    }

    p {
        color: var(--black);
        font-size: 1.4em;
    }
`

export default GlobalStyle;