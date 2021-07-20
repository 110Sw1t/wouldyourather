import {
   ADD_QUESTION,
   ANSWER_QUESTION,
} from '../actions/questions';

import {
   INITIATE_DATA,
} from '../actions/shared';

export default function questions(state = {}, action) {
   switch (action.type) {
      case ADD_QUESTION:
         return {...state, [action.question.id]: action.question}
      case ANSWER_QUESTION:
         let question = state[action.question.id];

         return {
            ...state,
            [question.id]: {
              ...state[question.id],
              [action.question.answer]: {
                ...state[question.id][action.question.answer],
                votes: state[question.id][action.question.answer].votes.concat([action.question.answerer])
              }
            }
          }
      case INITIATE_DATA:
         return action.data.questions;
      default:
         return state;
   }
}