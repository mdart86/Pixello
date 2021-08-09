import styled from "styled-components";

//messages
//not found
//home
export const CenteringContainer = styled.div`
    display: flex;
    justify-content: center; 
    ${props => props.notfound || props.pleasesignin || props.nopostsyet ? "flex-direction: column; text-align: center; margin-top: 50px;" : null}
`