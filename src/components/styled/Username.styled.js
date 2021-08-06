import styled from "styled-components";

//used in: 
//  comment
//  message
//  notifications
//  post
//  profile
//  view post

export const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0;
    font-size: ${props => props.fontSize};
    ${props => props.profile ? "margin: 0 auto; margin-top: 30px; width: 70%;" : null}
    ${props => props.profile && window.innerWidth >= 450 ? "margin-top: 0;" : null}
    ${props => props.viewPost ? "margin-top: 30px;" : null}
    ${props => props.comment ? "margin-top: 3px;" : null}
`



