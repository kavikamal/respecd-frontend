import { LOGIN_USER,LOGOUT_USER,GET_USER,UPDATE_USER,DELETE_USER } from "../config";

export const userState ={
    userid :'',
    firstname : '',
    lastname :'',
    email : '',
    token : '',
    loginSuccess : false
}

export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            console.log(action.payload);
            return { ...state, 
                userid: action.payload.user.userid, 
                firstname: action.payload.user.firstname, 
                lastname: action.payload.user.lastname,
                email: action.payload.user.email, 
                token: action.payload.token, 
                loginSuccess: true 
            };

        case LOGOUT_USER:
            return { ...state, 
                userid: '', 
                firstname: '', 
                lastname: '',
                email: '', 
                token: '', 
                loginSuccess: false 
            };
        case GET_USER:
            return { ...state, 
                userid: action.userid, 
                firstname: action.firstname, 
                lastname: action.lastname,
                email: action.email, 
                loginSuccess: true 
            };
        case UPDATE_USER:  
            break;
         
        case DELETE_USER:
            break;
        default:
            return state;
    }
}    