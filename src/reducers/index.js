import { combineReducers } from 'redux';
import { glassesState, glassesReducer } from './glassesReducer.js';
import { framesState, framesReducer } from './framesReducer.js';

export const initialState = {
    glassesState: glassesState,
    framesState: framesState,
}

export default combineReducers( {
    glassesReducer,
    framesReducer
})


