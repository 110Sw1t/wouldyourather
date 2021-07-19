import {
   LOGIN
} from '../actions/login.js';

export default function loggedInUser(state = null, action) {
   switch (action.type) {
      case LOGIN:
         return action.loggedInUser;
      default:
         return state;
   }
}