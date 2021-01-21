import getProfile from "./actions";

const initialState = () => {
  const initialUser = localStorage.getItem("user");
  return initialUser ? JSON.parse(initialUser) : {};
};

const profileReducer = (state = initialState(), action) => {
  switch (action.type) {
    case getProfile:
      const { profile } = action;
      return profile;

    default:
      return state;
  }
};

export default profileReducer;
