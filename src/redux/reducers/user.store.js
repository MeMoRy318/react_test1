export const userStore = (state=null,action)=>{
    switch (action.type) {
        case "GET_USER":
            const {data,id} = action.payload
            return data.find(value => value.id === id )
        default:
            return state;

    }
}