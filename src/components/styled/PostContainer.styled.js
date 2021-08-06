import styled from "styled-components";

//view post
export const PostContainer = styled.section`
    margin: 0;
    padding: 0 4%;
    position: absolute;
    ${window.innerWidth < 450 ? "top: 0px;" : "top: 65px;" }
`