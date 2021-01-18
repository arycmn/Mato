export const membersReducer = (state = [], action) =>{
    switch (action.type) {
        case '@members/STORE':
            const  { membersList } = action
            console.log(membersList)
            return [...state,membersList]

        default:
            return state
    }
}

export default membersReducer
