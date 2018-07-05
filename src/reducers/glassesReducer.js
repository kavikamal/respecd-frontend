import { CREATE_GLASS } from '../actions/index.js'

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
    pic: ""
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
            return newState;
        default: 
            return state;
    }
    
}