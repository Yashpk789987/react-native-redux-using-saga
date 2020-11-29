import { SET_DATA_AFTER_CALL_API } from "../actionCreaters/profile";

const initialState = {
  name: "",
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case SET_DATA_AFTER_CALL_API: {
      const name = action.payload;
      return { ...state, name };
    }

    default:
      return state;
  }
}
