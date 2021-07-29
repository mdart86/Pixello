import { createGlobalStyle } from "styled-components"

let hideOverflow = ["/", "/about", "/log-in"]

const GlobalStyles = createGlobalStyle`
    html, body {
        position: relative;
        margin: 0;
        overflow-x: hidden;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
        color: var(--charcoal);
        --green: #85DEC3;
        --light-pink: #EFD1CE;
        --dark-pink: #EC9E9E;
        --blue: #CAEFE8;
        --charcoal: #362D2D;
        --white: #FFFFFF;    
        ${hideOverflow.includes(window.location.pathname) ? "overflow-y: hidden;" : null}
    }
    @media only screen and (min-width: 500px) {
        html, body {
            width: 500px;
            margin: 0 auto;
        }
    }
    
`

// if the @media width is changed, the max-width
// in the Nav component needs to be changed too

export default GlobalStyles
