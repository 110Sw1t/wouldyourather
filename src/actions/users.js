import { _getUsers } from '../services/_DATA.js';

export const RETREIVE_USERS = "RETREIVE_USERS";

function retreiveUsers(users) {
   return {
      type: RETREIVE_USERS,
      users,
   }
}

export function handleRetreiveUsers() {
   return (dispatch) => {
      return _getUsers()
      .then((users) => {
         dispatch(retreiveUsers(users));
      })
      .catch((error) => {
         alert(error);
      })
   }
}