
import { CREATE_FRAME } from '../actions/framesAction'

export const framesState = {
    title: "",
    condition: "",
    description: "",
    city: "",
    pic: ""
}

export const framesReducer = (state = framesState, action) => {
    switch (action.type) {
        case CREATE_FRAME:
            let newState = {...state};
            newState.title = action.payload.title;
            newState.condition = action.payload.condition.rating; 
            newState.description = action.payload.description; 
            newState.city = action.payload.city; 
            newState.pic = action.payload.pic;
            return newState;
        default: 
            return state;
    }
    
}