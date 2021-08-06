import styled from "styled-components";

//create post
export const ContainerCreatePost = styled.section`
    margin: 0 20px;
`
//log out
export const ContainerLogout = styled.div`
    position: absolute;
    top: 0;
    ${props => props.left ? "left: 0;" : "right: 0;"}
    height: ${props => props.left ? "100px;" : "50px;"}
    width: ${props => props.left ? "100px;" : "50px;"}
`
//post
export const ContainerPost= styled.div`
    margin: 0 7%;
`
