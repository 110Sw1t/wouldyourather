import { combineReducers } from "redux";
import loggedInUser from "./login";
import users from "./users";

export default combineReducers({
   users,
   loggedInUser,
});