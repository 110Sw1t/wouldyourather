import { _saveQuestion } from '../services/_DATA.js';

export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
   return {
      type: ADD_QUESTION,
      question
   }
}


export function handleAddQuestion(question) {
   return (dispatch) => {
      _saveQuestion(question)
      .then(q => {
         dispatch(addQuestion(q));
         alert("Question added successfully!");
      })
      .catch((error) => alert(error))
   }
}