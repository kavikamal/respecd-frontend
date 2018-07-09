import { CREATE_GLASS, SINGLE, UPDATE, TOKEN } from '../actions/index.js'

export const glassesState = {
    title: "",
    leftsphere: "",
    rightsphere: "",
    leftcylinder: "",
    rightcylinder: "",
    leftaxis: "",
    rightaxis: "",
    add: "",
    condition: "",
    description: "",
    city: "",
    pic: "",
    token: ""
}

export const glassesReducer = (state = glassesState, action) => {
    switch (action.type) {
        case CREATE_GLASS:
            let newState = {...state};
            newState.title = action.payload.title;
            newState.leftsphere = action.payload.leftsphere;
            newState.rightsphere = action.payload.rightsphere;
            newState.leftcylinder = action.payload.leftcylinder;
            newState.rightcylinder = action.payload.rightcylinder;
            newState.leftaxis = action.payload.leftaxis;
            newState.rightaxis = action.payload.rightaxis;
            newState.add = action.payload.add; 
            newState.condition = action.payload.condition.rating; 
            newState.description = action.payload.description; 
            newState.city = action.payload.city; 
            newState.pic = action.payload.pic;
            // newState.token = action.payload.token;
            return newState;
        case SINGLE:
            let newState2 = {...state};
            newState2.title = action.payload.title;
            newState2.leftsphere = action.payload.leftsphere;
            newState2.rightsphere = action.payload.rightsphere;
            newState2.leftcylinder = action.payload.leftcylinder;
            newState2.rightcylinder = action.payload.rightcylinder;
            newState2.leftaxis = action.payload.leftaxis;
            newState2.rightaxis = action.payload.rightaxis;
            newState2.add = action.payload.add; 
            newState2.condition = action.payload.rating; 
            newState2.description = action.payload.description; 
            newState2.city = action.payload.location; 
            newState2.pic = action.payload.pic;
            // newState2.token = action.payload.token;
            return newState2;
        case UPDATE:
        let newState3 = {...state};
        newState3.title = action.payload.title;
        newState3.leftsphere = action.payload.leftsphere;
        newState3.rightsphere = action.payload.rightsphere;
        newState3.leftcylinder = action.payload.leftcylinder;
        newState3.rightcylinder = action.payload.rightcylinder;
        newState3.leftaxis = action.payload.leftaxis;
        newState3.rightaxis = action.payload.rightaxis;
        newState3.add = action.payload.add; 
        newState3.condition = action.payload.rating; 
        newState3.description = action.payload.description; 
        newState3.city = action.payload.location; 
        newState3.pic = action.payload.pic;
        // newState3.token = action.payload.token;
        return newState3;
    case TOKEN: 
        let newState4 = {...state};
        newState4.token = action.payload.token;
        return newState4;
        default: 
            return state;
    }
    
}