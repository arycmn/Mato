export const postsReducer = (state = [], action) =>{
    switch (action.type) {
        case '@posts/STORE':
            const  { postList } = action
            return [...postList]

        default:
            return state
    }
}

export default postsReducer
