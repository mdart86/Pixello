import styled from "styled-components";

//used in: 
//  comment
//  post
//  viewPost

export const Caption = styled.p`
    margin: ${props => props.comment ? "5px 20px 5px 5px;" : "margin: 5px 0;"}
    ${props => props.viewPost ? "margin: 0;" : null}
    font-size: ${props => props.comment ? "0.7rem;" : "0.8rem;"}
    ${props => props.post ? "margin-top: 2px;" : null}
`