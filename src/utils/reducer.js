export const initialState = {
    loggedInUser: "no user",
    isAdmin: false
}

//what do we need user state for?
// isLoggedIn?
// isAdmin?
// isContentOwner? (post/profile/comment)

//for sign up and log in and create post,
//we need to collect the form data and 
//send it in an api request

//for posts we need: 
//  likes tally
//  posts tally (num of posts a user has)
//  do we need state for filtering by category?

export const reducer = (state, action) => {
    switch (action.type) {
        case "setLoggedInUser":
            return {
                ...state, 
                loggedInUser: action.data
            }
        case "logOutUser":
            return {
                ...state, 
                loggedInUser: ""
            }
        default: 
            return state
    }
}