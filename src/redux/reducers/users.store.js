export const usersStore = (state=[],action) =>{
    switch (action.type) {
        case "LOAD_USERS":
            return [...action.payload]
        default:
            return state

    }
}