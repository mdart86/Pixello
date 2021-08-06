import styled from "styled-components";

//used in: 
//  create post
//  sign up

export const PlusCircle = styled.div`
    height: ${props => props.createPost ? "60px;" : "35px;"}
    width:  ${props => props.createPost ? "60px;" : "35px;"}
    border-radius: 50%;
    background: ${props => props.createPost ? "var(--green);" : "var(--blue);"}
    ${props => props.createPost ? "margin: 5px;" : null}
    ${props => props.signup ? "display: flex; justify-content: center; align-items: center;" : null}
`
