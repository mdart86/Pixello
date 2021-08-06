import styled from "styled-components";

//used in: 
//  mobile nav
//  desktop nav
//  about 

export const IconsContainer = styled.div`
    ${props => !props.about ? "display: flex; justify-content: space-around;" : "flex-direction: row;"}
    ${props => props.mobile ? "width: 100%; margin-top: 30px;" : null }
    ${props => props.desktop ? "width: 230px; margin: 5px 100px 0 0;" : null }
    ${props => props.desktop && window.location.pathname === "/new" ? "margin-right: 15px;" : null }
`


