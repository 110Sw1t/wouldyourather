import {
   RETREIVE_USERS
} from '../actions/users';

import {
   ADD_QUESTION
} from '../actions/questions';

export default function users(state = {}, action) {
   switch (action.type) {
      case RETREIVE_USERS:
         return action.users
      case ADD_QUESTION:
         let user = state[action.question.author];
         if (user) {
            return {
               ...state,
               [action.question.author]: {...user, questions: [...(user.questions), action.question.id]}
            }
         }
         break;
      default:
         return state;
   }
}