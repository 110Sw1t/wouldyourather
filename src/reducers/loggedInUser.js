import {
   LOGIN,
   LOGOUT
} from '../actions/session';

import {
   ADD_QUESTION,
   ANSWER_QUESTION,
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
      case ANSWER_QUESTION:
         if(state && Object.keys(state).length) {
            return {...state, answers: {...(state.answers), [action.question.id]:action.question.answer}}
         }
         break;
      default:
         return state;
   }
}