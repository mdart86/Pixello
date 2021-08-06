import styled from "styled-components";

//used in: 
//  message
//  messages
//  notifications
export const MessagesContainer = styled.section`
    ${props => !props.messages ? "margin: 20px auto 5px; width: 90%;" : null}
    ${props => props.messages && window.innerWidth < 450 ? "margin-top: 210px;" : null}
    ${props => props.messages && window.innerWidth >= 450 ? "margin-top: 50px;" : null}
    display: flex;
    flex-direction: column;
`

