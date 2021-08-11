import styled from "styled-components";

//used in:
//  create post
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
export const ContainerPost = styled.div`
    margin: 0 7%;
`

//app start
export const ContainerAppStart = styled.div`
    margin: 0;
`

//app start
export const ClippingContainer = styled.div`
    position: absolute;
    bottom: 0;
    overflow: hidden;
    height: 250px;
    width: 100%;   
`

//profile
export const AvatarContainer = styled.div`
    width: 90px;
    height: 90px;
    margin: 10px auto;
`

//view post
export const CategoryContainer = styled.div`
    float: right;
`

//messages
//not found
//home
export const CenteringContainer = styled.div`
    display: flex;
    justify-content: center; 
    ${props => props.notfound || props.pleasesignin || props.nopostsyet || props.filter ? "flex-direction: column; text-align: center; margin-top: 50px;" : null}
    ${props => props.filter ? "width: 85%; margin: 50px auto;" : null}
    ${props => props.nopostsyet ? "margin: 0;" : null}
`

//view post
export const CommentsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(80px, auto);
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 5px;
`

//message
//notifications
export const DetailsContainer = styled.div`
    width: 90%;
    margin: 30px auto 10px;
`

//profile
export const GridContainer = styled.div`
    width: 100%;
    height: auto;
`

//mobile nav
//desktop nav
//about 
//home
//categoryFilter
export const IconsContainer = styled.div`
    ${props => !props.about ? "display: flex; justify-content: space-around;" : "flex-direction: row;"}
    ${props => props.mobile ? "width: 100%; margin-top: 30px;" : null }
    ${props => props.desktop ? "width: 230px; margin: 5px 100px 0 0;" : null }
    ${props => props.desktop && window.location.pathname === "/new" ? "margin-right: 15px;" : null }
    ${props => props.refresh ? "margin-bottom: 5px; justify-content: center;" : null}
`

//message
//messages
//notifications
export const MessagesContainer = styled.section`
    ${props => !props.messages ? "margin: 20px auto 5px; width: 90%;" : null}
    ${props => props.messages && window.innerWidth < 450 ? "margin-top: 210px;" : null}
    ${props => props.messages && window.innerWidth >= 450 ? "margin-top: 50px;" : null}
    display: flex;
    flex-direction: column;
`

//view post
export const PostContainer = styled.section`
    margin: 0;
    padding: 0 4%;
    position: absolute;
    ${window.innerWidth < 450 ? "top: 0px;" : "top: 65px;" }
`

//profile
export const ProfileContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    ${window.innerWidth >= 450 ? "position: absolute; top: 65px;" : null}
`