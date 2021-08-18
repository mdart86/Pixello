export const reducer = (state, action) => {
    switch (action.type) {
        case "logOutUser":
            return {
                ...state, 
                loggedInUsername: "", 
                loggedInJWT: ""
            }
        case "setLoggedInUsername":
            return {
                ...state, 
                loggedInUsername: action.data
            }
        case "setJWT": 
            return {
                ...state, 
                loggedInJWT: action.data
            }
        case "setLoggedInUserId":
            return {
                ...state, 
                loggedInUserId: action.data
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