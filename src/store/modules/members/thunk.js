import { storeMember } from "./actions";
import api from "../../../services/axios";

export const getUserListThunk = () => async (dispatch) => {
  api
    .get("/users")
    .then((res) => {
      dispatch(storeMember(res.data));
    })
    .catch((err) => console.log(err));
};
