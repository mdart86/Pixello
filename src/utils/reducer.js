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