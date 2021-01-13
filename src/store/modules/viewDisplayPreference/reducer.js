export const viewDisplayPreferencesReducer = (state = [], action) =>{
    switch (action.type) {
        case '@viewDisplayPreferences/STORE':
            const  { viewDisplayPreferences } = action
            return viewDisplayPreferences

        default:
            return state
    }
}

export default viewDisplayPreferencesReducer
