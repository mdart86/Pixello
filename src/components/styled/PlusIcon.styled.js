import styled from "styled-components";

//used in: 
//  mobile nav
//  desktop nav
export const PlusIcon = styled.img`
    position: absolute;
    top: ${props => props.mobile ? "-35px;" : "20px;"}
    ${props => props.mobile ? "left: 50%; margin-left: -35px;" : null}
    ${props => props.desktop ? "right: 20px;" : null}
    height: ${props => props.mobile ? "70px;" : "80px;"}
    width: ${props => props.mobile ? "70px;" : "80px;"}
`
