import { LOGIN_USER, LOGOUT_USER } from "../config";

// export const loginUser = (payload) => {  
//     return function (dispatch) {
//       dispatch({ type: LOGIN_USER ,
//                  payload: payload
//       });
//     }
// }  

export const loginUser = (payload) => {
  return {
    type: LOGIN_USER,
    payload: payload
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

// export const logoutUser = () => {  
//     return function (dispatch) {
//       dispatch({ type: LOGOUT_USER });
//     }
// }  
