import styled from "styled-components";

//used in: 
//  message
//  notifications
//  profile

export const Bio = styled.p`
    margin: 0;
    font-size: 0.8rem;
    ${props => props.profile ? "margin: 5px auto; margin-bottom: 10px; width: 70%;" : null}
    
`