import { CREATE_FRAME,SINGLE_FRAME,UPDATE_FRAME, PROFILE_FRAME_SINGLE } from '../config';

export const createFrame = (data) => {
    return {
        type: CREATE_FRAME,
        payload: data
    }
}
export const getSingleFrame = (data) => {
    return {
        type: SINGLE_FRAME,
        payload: data
    }    
}

export const updateFrame = (data) => {
    return {
        type: UPDATE_FRAME,
        payload: data
    }
}

export const profileFrameSingle = (data) => {
    return {
        type: PROFILE_FRAME_SINGLE,
        payload: data
    }
}