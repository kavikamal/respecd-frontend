import { combineReducers } from 'redux';
import { glassesState, glassesReducer } from './glassesReducer.js';

export const initialState = {
    glassesState: glassesState
}

export default combineReducers( {
    glassesReducer
})


