import { combineReducers } from "redux";
import teamReducer from "./teamSlice";

export default combineReducers({
  team: teamReducer.reducer
});
