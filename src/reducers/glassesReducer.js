import { CREATE_GLASS, SINGLE_GLASS, UPDATE_GLASS, PROFILE_SINGLE } from '../config'

export const glassesState = {
    title: "",
    leftsphere: 0,
    rightsphere: 0,
    leftcylinder: 0,
    rightcylinder: 0,
    leftaxis: 0,
    rightaxis: 0,
    add: 0,
    condition: 0,
    description: "",
    city: "",
    pic: "",
    token: "",
    userid: "",
    contact: "",
    glassesid: ""
    
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
            newState.condition = action.payload.condition; 
            newState.description = action.payload.description; 
            newState.city = action.payload.city; 
            newState.pic = action.payload.pic;
            newState.userid = action.payload.userid;
            
            return newState;
        case SINGLE_GLASS:
            let newState2 = {...state};
            newState2.title = action.payload.title;
            newState2.leftsphere = action.payload.leftsphere;
            newState2.rightsphere = action.payload.rightsphere;
            newState2.leftcylinder = action.payload.leftcylinder;
            newState2.rightcylinder = action.payload.rightcylinder;
            newState2.leftaxis = action.payload.leftaxis;
            newState2.rightaxis = action.payload.rightaxis;
            newState2.add = action.payload.add; 
            newState2.condition = action.payload.condition; 
            newState2.description = action.payload.description; 
            newState2.city = action.payload.location; 
            newState2.pic = action.payload.pic;
            newState2.contact = action.payload.email; 
            newState2.glassesid = action.payload.glassesid;
            // newState2.token = action.payload.token;
            return newState2;
        case UPDATE_GLASS:
            let newState3 = {...state};
            newState3.title = action.payload.title;
            newState3.leftsphere = action.payload.leftsphere;
            newState3.rightsphere = action.payload.rightsphere;
            newState3.leftcylinder = action.payload.leftcylinder;
            newState3.rightcylinder = action.payload.rightcylinder;
            newState3.leftaxis = action.payload.leftaxis;
            newState3.rightaxis = action.payload.rightaxis;
            newState3.add = action.payload.add; 
            newState3.condition = action.payload.condition; 
            newState3.description = action.payload.description; 
            newState3.city = action.payload.location; 
            newState3.pic = action.payload.pic;
        // newState3.token = action.payload.token;
        return newState3;
        case PROFILE_SINGLE:
            let newState4 = {...state};
            newState4.title = action.payload.title;
            newState4.leftsphere = action.payload.leftsphere;
            newState4.rightsphere = action.payload.rightsphere;
            newState4.leftcylinder = action.payload.leftcylinder;
            newState4.rightcylinder = action.payload.rightcylinder;
            newState4.leftaxis = action.payload.leftaxis;
            newState4.rightaxis = action.payload.rightaxis;
            newState4.add = action.payload.add; 
            newState4.condition = action.payload.condition; 
            newState4.description = action.payload.description; 
            newState4.city = action.payload.location; 
            newState4.pic = action.payload.pic;
            newState4.glassesid = action.payload.glassesid;
            return newState4;
    default: 
            return state;
    }
    
}
