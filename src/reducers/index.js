import { TITLE, RX_LEFT, RX_RIGHT, QUALITY, DESCRIPTION, CITY } from '../actions/index.js'

const initialState = {
    token: {token: ""},
    username: "",
    password: "",
    title: "",
    prescription: {L: "", R: ""},
    condition: {rating: ""},
    description: "",
    city: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            let newState = {...state};
            newState.title = action.payload;
            return newState;
        case RX_LEFT:
            let newState1 = {...state};
            newState1.prescription.L = action.payload;
            return newState1;
        case RX_RIGHT:
            let newState2 = {...state};
            newState2.prescription.R = action.payload;
            return newState2;
        case QUALITY:
            let newState3 = {...state};
            newState3.condition = action.payload;
            return newState3;
        case DESCRIPTION:
            let newState4 = {...state};
            newState4.description = action.payload;
            return newState4;
        case CITY:
            let newState5 = {...state};
            newState5.city = action.payload;
            return newState5;
            
    }
    return state;
}

export default reducer;

