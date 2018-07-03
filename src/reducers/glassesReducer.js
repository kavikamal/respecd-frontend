import { TITLE, RX_LEFT, RX_RIGHT, QUALITY, DESCRIPTION, CITY, IMAGE } from '../actions/index.js'

export const glassesState = {
    title: "",
    leftsphere: "",
    rightsphere: "",
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
        default: 
            return state;
    }
    // return state;
}

