import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import membersReducer from "./modules/members/reducer";
import searchPreferencesReducer from "./modules/searchPreferences/reducer";
import campsReducer from "./modules/camps/reducer";
import postsReducer from "./modules/posts/reducer";
import profileReducer from "./modules/profile/reducer";

const reducers = combineReducers({
  memberList: membersReducer,
  searchPreferences: searchPreferencesReducer,
  campsList: campsReducer,
  postsList: postsReducer,
  profile: profileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
