//comment
const Avatar = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    float: left;
    margin: 5px 10px 0 5px;
    border-radius: 50%;
    border: 2px solid var(--green);
    box-sizing: border-box;
`
//message
const Avatar = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    float: left;
    margin: 0 15px 10px 0px;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-sizing: border-box;
`
//notifications
const Avatar = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    float: left;
    margin: 0px 15px 10px 0px;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-sizing: border-box;
`
//post
const Avatar = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    float: left;
    margin-right: 10px;
    margin-top: 2px;
    border-radius: 50%;
    border: 2px solid var(--green);
    box-sizing: border-box;
`
//profile
const Avatar = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-sizing: border-box;
`
//user messages
const Avatar = styled.img`
    height: 65px;
    width: 65px;
    object-fit: cover; 
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid var(--blue);
    margin-right: 10px;
`
//view post
const Avatar = styled.img`
    object-fit: cover;
    float: left;
    margin: 35px 10px 10px 0;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-sizing: border-box;
    ${window.innerWidth < 450 ? "width: 70px; height: 70px;" : "width: 80px; height: 80px; margin-top: 30px;" }
`
//profile
const AvatarContainer = styled.div`
    width: 90px;
    height: 90px;
    margin: 10px auto;
`
// login
const BackgroundBox = styled.div`
    width: 65%;
    height: 55vh;
    background: var(--green);
    margin: 140px auto 40px;
    border: 5px solid var(--blue);
    box-sizing: border-box;
    position: relative;
`
//sign up
const BackgroundBox = styled.div`
    width: 65%;
    height: 720px;
    background: var(--green);
    border: 5px solid var(--blue);
    box-sizing: border-box;
    margin: 140px auto 40px;
    position: relative;
`
//log out
const BackgroundCircle = styled.div`
    height: ${props => props.left ? "100px;" : "60px;"}
    width: ${props => props.left ? "100px;" : "60px;"}
    ${props => props.left ? "top: -55px;" : null}
    ${props => props.left ? "left: -20px;" : null}
    border-radius: 50%;
    background: var(--green);
    position: ${props => props.left ? "relative;" : "fixed;"}
    margin: ${props => props.left ? "0;" : "-15px -15px 0 0;"}
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => !props.left ? "clip-path: inset(0 10px 0 0);" : null}
`
//message
const Bio = styled.p`
    margin: 0;
    font-size: 0.8rem;
`
//notifications
const Bio = styled.p`
    margin: 0;
    font-size: 0.8rem;
`
//profile
const Bio = styled.p`
    margin: 5px auto;
    margin-bottom: 10px;
    font-size: 0.8rem;
    width: 70%;
`
//add comment
const Box = styled.div`
    background: var(--white);
    margin: 0;
    border-radius: 2px;
    border: 2px dashed var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
`
//comment
const Box = styled.div`
    background: var(--blue);
    margin: 0;
    border-radius: 5px;
    position: relative;
`
//desktop nav
const Box = styled.nav`
    display: flex;
    align-items: center;
    justify-content: right;
    background: var(--light-pink);
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    &:before {
        ${window.location.pathname !== "/new" ? "content: ''; width: 60px; height: 60px; border-radius: 50%; background: var(--charcoal); position: absolute; top: 30px; right: 30px;" : null}
    }
`
//mobile nav
const Box = styled.nav`
    background: var(--white);
    width: 100%;
    max-width: 450px;
    height: 80px;
    position: fixed;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 3px grey; 
    z-index: 5;
    &:before {
        ${window.location.pathname !== "/new" ? "content: ''; width: 60px; height: 60px; border-radius: 50%; background: var(--charcoal); position: absolute; top: -30px; left: 50%; margin-left: -30px;" : null}
    }
    ${window.location.pathname === "/new" ? "background: var(--blue);" : null}
    ${window.location.pathname === "/messages" ? "background: var(--green);" : null}
    ${window.location.pathname === "/notifications" ? "background: var(--light-pink);" : null}
`
//permissions bar
const Box = styled.div` 
    position: absolute;
    ${props => props.comment ? "bottom: 1px; right: 1px;" : props.desktop ? "right: 0; top: -5px;" : "top: -1px; left: -1px;"}
    height: ${props => props.comment ? "40px" : "30px"};
    width: ${props => props.comment ? "20px" : "65px"};
    background: ${props => props.comment ? "var(--green)" : "var(--dark-pink)"};
    box-shadow: 0 0 ${props => props.comment ? "2px var(--green)" : "5px var(--dark-pink)"};
    border-radius: 5px;
    display: flex;
    ${props => props.comment ? "flex-direction: column;" : null}
    justify-content: center;
    align-items: center;
`
//received message
const Box = styled.div`
    height: auto;
    width: 75%;
    background: var(--blue);
    border-radius: 5px;
    margin: 5px 0;  
`
//comment
const Caption = styled.p`
    margin: 5px 20px 5px 5px;
    font-size: 0.7rem;
`
//post
const Caption = styled.p`
    margin: 5px 0;
    font-size: 0.8rem;
`
//view post
const Caption = styled.p`
    margin: 0;
    font-size: 0.8rem;
`
//view post
const CategoryContainer = styled.div`
    float: right;
`
//messages
const CenteringContainer = styled.div`
    display: flex;
    justify-content: center; 
`
//about 
const Circle = styled.div`
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    color: var(--white);
    ${props => props.small ? "height: 80px; width: 80px;" : null}
    ${props => props.medium ? "height: 100px; width: 100px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.xlarge ? "height: 330px; width: 330px;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}
    ${props => props.green ? "background: var(--green);" : null}

    ${props => props.green && props.xlarge ? "top: 80px; left: -70px;" : null}
    ${props => props.blue && props.large ? "top: -70px; right: -70px;" : null}
    ${props => props.blue && props.medium ? "top: 330px; left: 105px; z-index: 1;" : null}
    ${props => props.pink && props.small ? "top: 300px; left: 190px; z-index: 2;" : null}
    ${props => props.pink && props.medium ? "top: -20px; left: -20px; z-index: 1;" : null}
`
//add comment
const Circle = styled.div`
    height: 35px;
    width: 35px;
    background: var(--blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
//app start
const Circle = styled.div`
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);

    ${props => props.xsmall ? "height: 50px; width: 50px;" : null}
    ${props => props.small ? "height: 100px; width: 100px;" : null}
    ${props => props.medium ? "height: 150px; width: 150px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.xlarge ? "height: 250px; width: 250px;" : null}
    ${props => props.xxlarge ? "height: 300px; width: 300px;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.green ? "background: var(--green);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}

    ${props => props.small && props.blue ? "top: -55px; right: -55px; height: 100px; width: 100px;" : null}
    ${props => props.medium && props.blue ? "bottom: -110px; right: 15px;" : null}
    ${props => props.large && props.blue ? "top: -80px; left: -40px;" : null}
    ${props => props.small && props.pink ? "top: -55px; left: 120px; z-index: 2;" : null}
    ${props => props.xlarge && props.pink ? "top: 190px; left: 25px; z-index: 2;" : null}
    ${props => props.xsmall && props.green ? "top: 65px; left: -20px; z-index: 2;" : null}
    ${props => props.small && props.green ? "top: 150px; right: -30px;" : null}
    ${props => props.xxlarge && props.green ? "bottom: -150px; left: -85px;" : null}
`
// login
const Circle = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -22.5px;
    right: -22.5px;
`
//message
const Circle = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
`
//messages
const Circle = styled.div`
    background: var(--white);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px dashed var(--green);
    margin-top: 45px;
    display: flex;
    flex-direction: column;
`
//sign up
const Circle = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -22.5px;
    right: -22.5px;
`
//view post
const CommentsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(80px, auto);
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 5px;
`
//create post
const Container = styled.section`
    margin: 0 20px;
`
//log out
const Container = styled.div`
    position: absolute;
    top: 0;
    ${props => props.left ? "left: 0;" : "right: 0;"}
    height: ${props => props.left ? "100px;" : "50px;"}
    width: ${props => props.left ? "100px;" : "50px;"}
`
//post
const Container = styled.div`
    margin: 0 7%;
`
//profile
const Count = styled.p`
    margin: 0 20px;
    font-size: 0.9rem;
    display: inline;
`
//profile
const Cursive = styled.span`
    font-family: 'Pacifico', cursive;
`
//message
const DetailsContainer = styled.div`
    width: 90%;
    margin: 30px auto 10px;
`
//notifications
const DetailsContainer = styled.div`
    width: 90%;
    margin: 30px auto 10px;
`
//sign up
const FileName = styled.p`
    margin-top: -5px;
    font-size: 0.8rem;
`
//create post
const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`
// login
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
//sign up
const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--white);
`
//profile
const GridContainer = styled.div`
    width: 100%;
    height: auto;
`
//about 
const Header = styled.h2`
    font-family: 'Pacifico', cursive;
    margin: 0;
    ${props => props.title ? "font-size: 2rem;": "font-size: 1rem;"}
`
// login
const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 40px;
`
//create post
const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    margin: 20px 0 0 0;
    font-size: 1.5rem;
    ${window.innerWidth < 450 ? null : "text-align: center"}
`
//sign up
const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 40px;
`
//about 
const Icon = styled.img`
    margin: 0 2px;
    ${props => props.arrow ? "transform: rotate(180deg) scale(2);" : null}    
    ${props => props.michael ? "height: 30px;" : null}
`
//add comment
const Icon = styled.img`
    height: 30px;
`
//comment
const Icon = styled.img`
    float: right;
    height: 20px;
    margin: 5px;
`
//create post
const Icon = styled.img`
    height: 60px;
    margin: 0;
`
//desktop nav
const Icon = styled.img`
    height: 30px;
    margin: 0;
`
// login
const Icon = styled.img`
    z-index: 1;
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
`
//log out
const Icon = styled.img`
    height: 23px;
    margin-top: ${props => props.left ? "50px;" : "15px;"}
    margin-right: ${props => props.left ? "0;" : "5px;"}
`
//message
const Icon = styled.img`
    
`
//mobile nav
const Icon = styled.img`
    height: 30px;
`
//permissions bar
const Icon = styled.img`
    height: ${props => props.comment ? "15px" : "20px"};
    margin: ${props => props.comment ? "0 2px" : "0 5px"}
`
//post
const Icon = styled.img`
    float: right;
`
//sign up
const Icon = styled.img`
    z-index: 1;
    ${props => props.upload ? "height: 40px;" : null}
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
`
//view post
const Icon = styled.img`
    ${props => props.water ? "margin-left: 4px;" : null}
`
//mobile nav
const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`
//desktop nav
const IconsContainer = styled.div`
    width: 230px;
    display: flex;
    justify-content: space-around;
    margin: 5px 100px 0 0;
    ${window.location.pathname === "/new" ? "margin-right: 15px;" : null}
`
//about 
const IconsContainer = styled.div`
    flex-direction: row;
`

