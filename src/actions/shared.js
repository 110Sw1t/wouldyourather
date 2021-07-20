import { _getUsers, _getQuestions } from '../services/_DATA.js';

export const INITIATE_DATA = "INITIATE_DATA";

function initData(data) {
   return {
      type: INITIATE_DATA,
      data,
   }
}

export function handleInitData() {
   return (dispatch) => {
      Promise.all([_getUsers(), _getQuestions()])
         .then(([users, questions]) => dispatch(initData({users,questions})))
         .catch((error) => {
            alert("Please reload page")
         });
   }
}