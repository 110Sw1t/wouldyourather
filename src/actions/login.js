export const LOGIN = "LOGIN";

export function loginUser(loggedInUser) {
   return {
      type: LOGIN,
      loggedInUser,
   }   
} 



