//what do we need user state for?
// isLoggedIn?
// isAdmin?
// isContentOwner? (post/profile/comment)
//for posts we need: 
//  likes tally
//  posts tally (num of posts a user has)

export const reducer = (state, action) => {
    switch (action.type) {
        case "setLoggedInUsername":
            return {
                ...state, 
                loggedInUsername: action.data
            }
        case "logOutUser":
            return {
                ...state, 
                loggedInUsername: "", 
                loggedInJWT: ""
            }
        case "setJWT": 
            return {
                ...state, 
                loggedInJWT: action.data
            }
        case "setCategoryList":
            return {
                ...state, 
                categoryList: action.data
            }
        default: 
            return state
    }
}