import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    html, body {
        margin: 0;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
        --green: #85DEC3;
        --light-pink: #EFD1CE;
        --dark-pink: #EC9E9E;
        --blue: #CAEFE8;
        --charcoal: #362D2D;
        --white: #FFFFFF;
    }
    @media only screen and (min-width: 600px) {
        html, body {
            width: 600px;
            margin: 0 auto;
        }
    }
`

export default GlobalStyles