import styled from "styled-components";


//log out
export const BackgroundCircle = styled.div`
    height: ${props => props.left ? "100px;" : "60px;"}
    width: ${props => props.left ? "100px;" : "60px;"}
    ${props => props.left ? "top: -55px;" : null}
    ${props => props.left ? "left: -20px;" : null}
    border-radius: 50%;
    background: var(--green);
    position: ${props => props.left ? "relative;" : "fixed;"}
    margin: ${props => props.left ? "0;" : "-15px -15px 0 0;"}
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => !props.left ? "clip-path: inset(0 10px 0 0);" : null}
`