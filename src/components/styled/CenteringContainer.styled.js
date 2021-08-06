import styled from "styled-components";

//messages
//not found
export const CenteringContainer = styled.div`
    display: flex;
    justify-content: center; 
    ${props => props.notFound? "flex-direction: column; text-align: center; margin-top: 50px;" : null}
`