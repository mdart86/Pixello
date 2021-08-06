import styled from "styled-components";

//used in: 
//  mobile nav
//  desktop nav
//  add comment
//  create post
//  message
export const PlusIcon = styled.img`
    ${props => !props.comment && !props.createPost? "position: absolute;" : null}
    top: ${props => props.mobile ? "-35px;" : "20px;"}
    ${props => props.mobile ? "left: 50%; margin-left: -35px;" : null}
    ${props => props.desktop ? "right: 20px;" : null}
    height: ${props => props.mobile ? "70px;" : "80px;"}
    width: ${props => props.mobile ? "70px;" : "80px;"}
    ${props => props.createPost ? "height: 60px; width: 60px; margin: 0;" : null}
    ${props => props.comment ? "height: 35px; width: 35px;" : null}
`

//about 
export const IconAbout = styled.img`
    margin: 0 2px;
    ${props => props.arrow ? "transform: rotate(180deg) scale(2);" : null}    
    ${props => props.michael ? "height: 30px;" : null}
`

//comment (like)
export const IconComment = styled.img`
    float: right;
    height: 20px;
    margin: 5px;
`

//desktop nav
export const IconDesktopNav = styled.img`
    height: 30px;
    margin: 0;
`

// login
export const IconLogin = styled.img`
    z-index: 1;
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
`

//log out
export const IconLogout = styled.img`
    height: 23px;
    margin-top: ${props => props.left ? "50px;" : "15px;"}
    margin-right: ${props => props.left ? "0;" : "5px;"}
`

//mobile nav
export const IconMobileNav = styled.img`
    height: 30px;
`

//permissions bar
export const IconPermissionsBar = styled.img`
    height: ${props => props.comment ? "15px" : "20px"};
    margin: ${props => props.comment ? "0 2px" : "0 5px"}
`

//post
export const IconPost = styled.img`
    float: right;
`

//view post
export const IconViewPost = styled.img`
    ${props => props.water ? "margin-left: 4px;" : null}
`

//sign up
export const IconSignUp = styled.img`
    z-index: 1;
    ${props => props.upload ? "height: 40px;" : null}
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
`
