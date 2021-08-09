import styled from "styled-components";


const Image = styled.img`
    ${props => !props.unClickable ? "&:hover {opacity: 0.7;}" : null}
` 

//post
//view post
export const Photo = styled(Image)`
    border-radius: 5px;
    max-width: ${props => props.post ? "92%;" : "100%;"}
    ${props => props.post ? "margin: 8px 4% 0 4%;"  : null}
    ${props => props.viewPost ? "margin-top: 10px;" : null}
`

//profile
export const PhotoPreview = styled(Image)`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin: 0;
`
