import { LOGIN, LOGOUT } from '../actions/session';
import history from '../routes/history';

const authorizer = (store) => (next) => (action) => {

   switch (action.type) {
      case LOGIN:
         const { users } = store.getState();
         if (!users || Object.keys(users).length === 0 || !action.loggedInUser || !action.loggedInUser.id || !users[action.loggedInUser.id]) {
            alert("Invalid User");
         } else {
            const res = next(action);
            history.push("/");
            return res;
         }
         break;
      case LOGOUT:
         next(action);
         history.push("/login");
         break;
      default:
         return next(action);
   }


}

export default authorizer;