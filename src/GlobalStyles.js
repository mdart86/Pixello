import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html, body {
        position: relative;
        margin: 0;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
        color: var(--charcoal);
        --green: #85DEC3;
        --light-pink: #EFD1CE;
        --dark-pink: #EC9E9E;
        --blue: #CAEFE8;
        --charcoal: #362D2D;
        --white: #FFFFFF;   
        ${window.location.pathname === "/" || window.location.pathname === "/about" || window.location.pathname === "/log-in" ? "height: 100vh; overflow: hidden;" : null}
 
    }
    @media only screen and (min-width: 600px) {
        html, body {
            width: 600px;
            margin: 0 auto;
        }
    }
    
`

export default GlobalStyles
