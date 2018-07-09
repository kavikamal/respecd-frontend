import { CREATE_GLASS,SINGLE_GLASS,UPDATE_GLASS} from "../config";

export const glassesCreate = (data) => {
    return {
        type: CREATE_GLASS,
        payload: data
    }
}

export const glassSingle = (data) => {
    return {
        type: SINGLE_GLASS,
        payload: data
    }    
}

export const glassesUpdate = (data) => {
    return {
        type: UPDATE_GLASS,
        payload: data
    }
}