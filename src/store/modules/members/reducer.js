export const membersReducer = (state = [], action) =>{
    switch (action.type) {
        case '@members/STORE':
            const  { memberList } = action
            return memberList

        default:
            return state
    }
}

export default membersReducer
