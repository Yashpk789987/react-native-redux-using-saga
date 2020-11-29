import { CALL_API, SET_DATA_AFTER_CALL_API } from "../actionCreaters/profile";

export const callApi = (payload) => {
  return {
    type: CALL_API,
    payload,
  };
};

export const setDataAfterCallApi = (payload) => {
  return {
    type: SET_DATA_AFTER_CALL_API,
    payload,
  };
};
