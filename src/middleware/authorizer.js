import { LOGIN } from '../actions/session';

const authorizer = (store) => (next) => (action) => {

   if (action.type === LOGIN) {
      const { users } = store.getState();
      if (!users || Object.keys(users).length === 0 || !action.loggedInUser || !action.loggedInUser.id || !users[action.loggedInUser.id]) {
         alert("Invalid User");
      } else {
         return next(action);
      }

   } else {
      return next(action);
   }

}

export default authorizer;