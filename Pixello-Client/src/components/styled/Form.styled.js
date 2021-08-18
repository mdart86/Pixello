import styled from "styled-components";

//used in: 
//  create post
//  login
//  sign up

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    ${props => props.signup ? "color: var(--white);" : null}
`