import styled from "styled-components";

//app start
export const Tagline = styled.h2`
    text-align: center;
    color: var(--green);
    font-size: 0.7rem;
    margin-top: -10px;
`

//create post
export const SubHeader = styled.h2`
    margin: 0 0 20px 0;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    ${window.innerWidth < 450 ? null : "text-align: center"}
`

//about 
//create post
//login
//sign up
//not found
export const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    margin: 0;
    ${props => props.login || props.signup ? "text-align: center; padding-top: 40px;" : null}
    ${props => props.title ? "font-size: 2rem;": null}
    ${props => props.name ? "font-size: 1rem;" : null}
    ${props => props.createPost ? "margin-top: 20px; font-size: 1.5rem;" : null}
    ${props => props.createPost && window.innerWidth >= 450 ?"text-align: center;" : null}
`



