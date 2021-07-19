import {
   LOGIN,
   LOGOUT
} from '../actions/session';

import {
   ADD_QUESTION
} from '../actions/questions';

export default function loggedInUser(state = null, action) {
   switch (action.type) {
      case LOGIN:
         return action.loggedInUser;
      case LOGOUT:
         return null;
      case ADD_QUESTION:
         if(state && Object.keys(state).length) {
            return {...state, questions: [...(state.questions), action.question.id]}
         }
         break;
      default:
         return state;
   }
}