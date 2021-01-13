import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import membersReducer from './modules/members/reducer'
import searchPreferencesReducer from './modules/searchPreferences/reducer'
import viewDisplayPreferencesReducer from './modules/viewDisplayPreference/reducer'

const reducers = combineReducers({
    memberList:membersReducer,
    searchPreferences:searchPreferencesReducer,
    viewDisplayPreferences:viewDisplayPreferencesReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
