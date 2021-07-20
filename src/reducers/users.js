import {
   INITIATE_DATA
} from '../actions/shared';

import {
   ADD_QUESTION,
   ANSWER_QUESTION
} from '../actions/questions';

export default function users(state = {}, action) {
   switch (action.type) {
      case INITIATE_DATA:
         return action.data.users
      case ADD_QUESTION:
         let user = state[action.question.author];
         if (user) {
            return {
               ...state,
               [action.question.author]: { ...user, questions: [...(user.questions), action.question.id] }
            }
         }
         break; 
      case ANSWER_QUESTION:
         let answeringUser = state[action.question.answerer];
         if (answeringUser) {
            return {
               ...state,
               [action.question.answerer]: { ...answeringUser, 
                  answers: {...(answeringUser.answers), 
                     [action.question.id]: action.question.answer} }
            }
         }
         break;
      default:
         return state;
   }
}