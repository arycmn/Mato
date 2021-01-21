import { storeCamp, storeCamps } from "./actions";
import API from "../../../services/axios";

export const getCampsites = () => async (dispatch) => {
  try {
    const response = await API.get(`/campsite`);
    const fetchedCamps = response.data;
    dispatch(storeCamps(fetchedCamps));
  } catch (err) {
    console.log(err);
  }
};

export const getCampsiteByCampsiteId = (campsiteId) => async (dispatch) => {
  try {
    const response = await API.get(`/campsite/${campsiteId}`);
    const fetchedCamp = response.data;
    dispatch(storeCamp(response.data));
  } catch (err) {
    console.log(err);
  }
};
