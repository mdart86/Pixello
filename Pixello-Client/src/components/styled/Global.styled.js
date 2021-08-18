import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    html, body {
        position: relative;
        margin: 0;
        overflow-x: hidden;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        color: var(--charcoal);
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
// NOTE: if the @media width is changed, the max-width
// in the Nav component needs to be changed too