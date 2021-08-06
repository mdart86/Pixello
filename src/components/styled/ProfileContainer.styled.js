import styled from "styled-components";

//profile
export const ProfileContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    ${window.innerWidth >= 450 ? "position: absolute; top: 65px;" : null}
`