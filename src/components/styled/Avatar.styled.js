import styled from "styled-components";

//used in: 
//  comment
//  post
//  message
//  notifications
//  profile
//  user messages
//  view post

export const Avatar = styled.img`
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 50%;
    ${props => props.comment || props.post ? "width: 20px; height: 20px; border: 2px solid var(--green);" : null}
    ${props => !props.profile && !props.userMessages ? "float: left;" : null}
    ${props => props.comment ? "margin: 5px 10px 0 5px;" : null}
    ${props => props.post ? "margin-right: 10px; margin-top: 2px;" : null}
    ${props => props.message || props.notifications ? "width: 75px; height: 75px; margin: 0 15px 10px 0px;" : null}
    ${props => props.profile || props.viewPost || props.message || props.notifications ? "border: 4px solid var(--white);" : null}
    ${props => props.profile ? "width: 90px; height: 90px;" : null}
    ${props => props.userMessages ? "height: 65px; width: 65px; border: 4px solid var(--blue); margin-right: 10px;" : null}
    ${props => props.viewPost ? "margin: 35px 10px 10px 0;" : null}
    ${props => props.viewPost && window.innerWidth < 450 ? "width: 70px; height: 70px;" : null}
    ${props => props.viewPost && window.innerWidth >= 450 ? "width: 80px; height: 80px; margin-top: 30px;" : null}
`

