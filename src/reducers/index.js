import { combineReducers } from 'redux';
import { userState, userReducer } from './userReducer.js';
import { glassesState, glassesReducer } from './glassesReducer.js';
import { framesState, framesReducer } from './framesReducer.js';

export const initialState = {
    userState:userState,
    glassesState: glassesState,
    framesState: framesState,
}

export default combineReducers( {
    userReducer,
    glassesReducer,
    framesReducer
})


