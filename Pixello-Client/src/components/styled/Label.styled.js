import styled from "styled-components";

//used in:
//  create post
//  sign up

export const Label = styled.label`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: 5px dashed var(--blue);
    background: var(--white);
    height: ${props => props.createPost ? "140px;" : "120px;"}
    width: ${props => props.createPost ? "90%;" : "120px;"}
    ${props => props.createPost ? "flex-direction: column;" : null}
    ${props => props.signup ? "border-radius: 50%;" : null}
    &:hover {
        cursor: pointer;
    }
`

//login
//signup
export const CircleLabel = styled.label`
    border-radius: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 90px;
    background: var(--blue);
    position: absolute;
    bottom: -22.5px;
    right: -22.5px;
`