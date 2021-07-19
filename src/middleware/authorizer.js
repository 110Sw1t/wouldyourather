import { LOGIN, LOGOUT } from '../actions/session';

const authorizer = (store) => (next) => (action) => {

   switch (action.type) {
      case LOGIN:
         const { users } = store.getState();
         if (!users || Object.keys(users).length === 0 || !action.loggedInUser || !action.loggedInUser.id || !users[action.loggedInUser.id]) {
            alert("Invalid User");
         } else {
            const res = next(action);
            return res;
         }
         break;
      case LOGOUT:
         return next(action);
      default:
         return next(action);
   }


}

export default authorizer;