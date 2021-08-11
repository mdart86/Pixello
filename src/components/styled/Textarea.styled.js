import styled from "styled-components";

//used in: 
//  create post
//  sign up

export const Textarea = styled.textarea`
    box-sizing: border-box;
    border-radius: 5px;
    font-style: italic;
    width: 70%;
    border: ${props => props.signup ? "1px solid var(--white);" : "3px solid var(--blue);"}
    height: ${props => props.signup ? "80px;" : "50px;"}
    font-size: ${props => props.signup ? "1.1rem;" : "0.9rem;"}
    margin: ${props => props.signup ? "25px auto;" : "20px auto;"}
    background: ${props => props.signup ? "var(--green);" : "var(--white);"}
    color: ${props => props.signup ? "var(--white);" : "var(--charcoal);"}
    max-width: 90%; ${props => props.signup ? "100%;" : "90%;"}
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
`