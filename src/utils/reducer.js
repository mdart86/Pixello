export const initialState = {
    isLoggedIn: false,
    isAdmin: false
}


//what do we need user state for?
// isLoggedIn?
// isAdmin?
// isContentOwner? (post/profile/comment)

//for posts we need: 
//  likes tally
//  posts tally (num of posts a user has)
//  do we need state for filtering by category?

export const Reducer = (state, action) => {
    switch (action.type) {
        case "logInUser":
            return {
                ...state, 
                isLoggedIn: true
            }
        case "logOutUser":
            return {
                ...state, 
                isLoggedIn: false
            }
        default: 
            return state
    }
}