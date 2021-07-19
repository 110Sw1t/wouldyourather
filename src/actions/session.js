export const LOGIN = "LOGIN";
export const LOGOUT  = "LOGOUT";

export function loginUser(loggedInUser) {
   return {
      type: LOGIN,
      loggedInUser,
   }   
} 

export function logoutUser() {
   return {
      type: LOGOUT,
   }   
} 



