import styled from "styled-components";

//used in: 
//  login
//  sign up

export const BackgroundBox = styled.div`
    width: 65%;
    background: var(--green);
    border: 5px solid var(--blue);
    box-sizing: border-box;
    position: relative;
    margin: 140px auto 40px;
    height: ${props => props.login ? "55vh;" : "720px"}
`
