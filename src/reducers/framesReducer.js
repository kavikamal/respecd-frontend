
import { CREATE_FRAME, SINGLE_FRAME, UPDATE_FRAME, PROFILE_FRAME_SINGLE } from '../config'

export const framesState = {
    title: "",
    condition: 0,
    description: "",
    location: "",
    pic: "",
    userid:"",
    frameid: "",
    contact: ""


}

export const framesReducer = (state = framesState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_FRAME:
            newState = {...state};
            newState.title = action.payload.title;
            newState.condition = action.payload.condition; 
            newState.description = action.payload.description; 
            newState.location = action.payload.location; 
            newState.pic = action.payload.pic;
            newState.userid = action.payload.userid;
            return newState;
        case SINGLE_FRAME:
            newState = {...state};
            newState.title = action.payload.title;
            newState.condition = action.payload.condition; 
            newState.description = action.payload.description; 
            newState.location = action.payload.location; 
            newState.pic = action.payload.pic;
            newState.userid = action.payload.userid;
            newState.frameid = action.payload.frameid;
            newState.contact = action.payload.email
            return newState;  
        case UPDATE_FRAME:
            newState = {...state};
            newState.title = action.payload.title;
            newState.condition = action.payload.condition; 
            newState.description = action.payload.description; 
            newState.location = action.payload.location; 
            newState.pic = action.payload.pic;
            newState.userid = action.payload.userid;
            return newState;
        case PROFILE_FRAME_SINGLE:
            newState = {...state};
            newState.title = action.payload.title;
            newState.condition = action.payload.condition;
            newState.description = action.payload.description;
            newState.location = action.payload.location;
            newState.pic = action.payload.pic;
            newState.userid = action.payload.userid;
            newState.frameid = action.payload.frameid;
            newState.contact = action.payload.email;
            return newState;
        default: 
            return state;
    } 
}