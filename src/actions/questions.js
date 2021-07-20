import { _saveQuestion, _getQuestions, _saveQuestionAnswer } from '../services/_DATA.js';

export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
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

function answerQuestion(question) {
   return {
      type: ANSWER_QUESTION,
      question
   }
}

export function handleAnswerQuestion(question) {
   return (dispatch) => {      
      let qRemote = { authedUser:question.answerer, qid:question.id, answer:question.answer };
      return _saveQuestionAnswer(qRemote)
      .then(()=>{
         dispatch(answerQuestion(question))})
      .catch((error) => console.error(error))
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