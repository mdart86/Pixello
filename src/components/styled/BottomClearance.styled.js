import styled from "styled-components";

//used in: 
//  view post
//  notifications
//  messages
//  message
//  home

export const BottomClearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
    ${props => props.desktop ? "height: 10px;" : null}
`