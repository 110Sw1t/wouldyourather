import { _saveQuestion, _getQuestions } from '../services/_DATA.js';

export const ADD_QUESTION = "ADD_QUESTION";
export const RETREIVE_QUESTIONS = "RETREIVE_QUESTIONS";

function addQuestion(question) {
   return {
      type: ADD_QUESTION,
      question
   }
}


export function handleAddQuestion(question, cb) {
   return (dispatch) => {
      return _saveQuestion(question)
      .then(q => {
         dispatch(addQuestion(q));
         cb();
      })
      .catch((error) => alert(error))
   }
}

function retreiveQuestions(questions) {
   return {
      type: RETREIVE_QUESTIONS,
      questions
   }
}

export function handleRetreiveQuestions() {
   return (dispatch) => {
      return _getQuestions()
      .then((questions) => {
         dispatch(retreiveQuestions(questions))
      })
      .catch((error) => alert("Please try refreshing the page!"))
   }
}