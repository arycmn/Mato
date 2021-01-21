import { storeMember } from "./actions";
import API from "../../../services/axios";

export const getUserListThunk = () => async (dispatch) => {
  let users = [];

  try {
    const response = await API.get(`/users`);
    users = [...response.data];
    dispatch(storeMember(users));
  } catch (err) {
    console.log(err);
  }
};

export const getUserByIdThunk = (userId) => async (dispatch) => {
  try {
    const response = await API.get(`/users/${userId}`);
    const fetchedUser = response.data;
    dispatch(storeMember([fetchedUser]));
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (registerInfo) => {
  const {
    email,
    password,
    firstname,
    lastname,
    followers_id,
    following_id,
    activities_id,
    image_url,
  } = registerInfo;

  try {
    const response = await API.post(`/users`, {
      email: email || "",
      password: password || "",
      firstname: firstname || "",
      lastname: lastname || "",
      followers_id: followers_id || [],
      following_id: following_id || [],
      activities_id: activities_id || [],
      image_url: image_url || "",
      id: undefined,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (loginInfo) => {
  const { email, password, id } = loginInfo;

  try {
    const response = await API.post(`/signin`, {
      email: email,
      password: password,
      id: id,
    });
    const { accessToken } = response.data;
    localStorage.setItem("AuthorizationToken", accessToken);
  } catch (err) {
    console.log(err);
  }
};
