import styled from "styled-components";

//used in: 
//  create post 
//  login
//  signup
export const Input = styled.input`
    border: none;
    font-style: italic;
    background: var(--green); 
    font-size: ${props => props.createPost ? "1rem;" : "1.1rem;"}
    margin: ${props => props.createPost ? "10px auto;" : "25px auto;"}
    color: ${props => props.createPost ? "var(--charcoal);" : "var(--white);"}
    width: ${props => props.createPost ? "80px;" : "70%;"}
    ${props => props.createPost ? "height: 35px; border-radius: 5px; font-family: 'Pacifico', cursive;" : "border-bottom: 1px solid var(--white);"}
    ${props => props.login && props.username ? "margin-top: 35%;" : null}
    ${props => props.signup && props.username ? "margin-top: 50px;" : null}
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
    &:hover {
        ${props => props.createPost ? "opacity: 0.7;" : null}
    }
`
