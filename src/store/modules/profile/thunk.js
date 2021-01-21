import { getProfile } from "./actions";

export const getProfileThunk = (user) => (dispatch, getState) => {
  dispatch(getProfile(user));
};
