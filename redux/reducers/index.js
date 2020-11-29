import { combineReducers } from "redux";

import counter from "./counter";
import profile from "./profile";

const rootReducer = combineReducers({
  counter,
  profile,
});

export default rootReducer;
