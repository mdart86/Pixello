import styled from "styled-components";

//post
//view post
export const Photo = styled.img`
    border-radius: 5px;
    max-width: ${props => props.post ? "92%;" : "100%;"}
    ${props => props.post ? "margin: 8px 4% 0 4%;"  : null}
    ${props => props.viewPost ? "margin-top: 10px;" : null}
`

//profile
export const PhotoPreview = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin: 0;
`
