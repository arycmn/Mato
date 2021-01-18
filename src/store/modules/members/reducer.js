export const membersReducer = (state = [], action) =>{
    switch (action.type) {
        case '@members/STORE':
            const  { membersList } = action
            return [...membersList]

        default:
            return state
    }
}

export default membersReducer
