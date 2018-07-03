import { TITLE, RX_LEFT, RX_RIGHT, QUALITY, DESCRIPTION, CITY, IMAGE, CYL_LEFT, CYL_RIGHT, LEFT_AXIS, RIGHT_AXIS, ADD_POWER } from '../actions/index.js'

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
    image: ""
}

export const glassesReducer = (state = glassesState, action) => {
    switch (action.type) {
        case TITLE:
            let newState = {...state};
            newState.title = action.payload;
            return newState;
        case RX_LEFT:
            let newState1 = {...state};
            newState1.leftsphere = action.payload;
            return newState1;
        case RX_RIGHT:
            let newState2 = {...state};
            newState2.rightsphere = action.payload;
            return newState2;
        case QUALITY:
            let newState3 = {...state};
            newState3.condition = action.payload.rating;
            return newState3;
        case DESCRIPTION:
            let newState4 = {...state};
            newState4.description = action.payload;
            return newState4;
        case CITY:
            let newState5 = {...state};
            newState5.city = action.payload;
            return newState5;
        case IMAGE:
            let newState6 = {...state};
            newState6.image = action.payload.name;
            return newState6;
        case CYL_LEFT:
            let newState7 = {...state};
            newState7.leftcylinder = action.payload;
            return newState7;
        case CYL_RIGHT:
            let newState8 = {...state};
            newState8.rightcylinder = action.payload;
            return newState8;
        case RIGHT_AXIS: 
            let newState9 = {...state};
            newState9.rightaxis = action.payload;
            return newState9;
        case LEFT_AXIS:
            let newState10 = {...state};
            newState10.leftaxis = action.payload;
            return newState10;
        case ADD_POWER:
            let newState11 = {...state};
            newState11.add = action.payload;
            return newState11;
        default: 
            return state;
    }
    // return state;
}

