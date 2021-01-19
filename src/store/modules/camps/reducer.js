export const campsReducer = (state = [], action) =>{
    switch (action.type) {
        case '@camps/STORE':
            const  { campList } = action
            return [...campList]

        case '@camp/STORE':
            const  { camp } = action
            return camp
            
        default:
            return state
    }
}

export default campsReducer
