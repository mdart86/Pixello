import styled from "styled-components";

//app start
export const Tagline = styled.h2`
    text-align: center;
    color: var(--green);
    font-size: 0.7rem;
    margin-top: -10px;
`

//create post
export const SubHeader = styled.h2`
    margin: 0 0 20px 0;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    ${window.innerWidth < 450 ? null : "text-align: center"}
`