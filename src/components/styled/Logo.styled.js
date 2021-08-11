import styled from "styled-components";

//used in: 
//  app start
//  about 
//  desktop nav
//  home
//  login
//  sign up

export const Logo = styled.h1`
    ${props => props.link ? "margin-top: -35px;" : null}
    text-align: center;
    color: ${props => props.desktop ? "var(--white);" : "var(--dark-pink);"}
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    ${props => props.appStart ? "margin: 90px 0 0 0;" : null}
    ${props => !props.signup && !props.home && !props.appStart ? "position: absolute; width: 150px;" : null}
    ${props => props.about ? "bottom: 5px; left: 50%; margin: 0 0 0 -75px;" : null}
    ${props => props.desktop ? "left: 50%; margin-left: -75px;" : null}
    ${props => props.home ? "margin: 5px 0 0 0;" : null}
    ${props => props.login ? "bottom: -26px; left: 50%; margin-left: -75px;" : null}
    ${props => props.signup ? "width: 150px; margin: 0 auto;" : null}
`