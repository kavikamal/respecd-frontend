export const TITLE = "TITLE";
export const RX_LEFT = "RX_LEFT";
export const RX_RIGHT = "RX_RIGHT";
export const QUALITY = "QUALITY";
export const DESCRIPTION = "DESCRIPTION";
export const CITY = "CITY";
export const IMAGE = "IMAGE";
export const CYL_LEFT = "CYL_LEFT";
export const CYL_RIGHT = "CYL_RIGHT";
export const ADD_POWER = "ADD_POWER";
export const RIGHT_AXIS = "RIGHT_AXIS";
export const LEFT_AXIS = "LEFT_AXIS";

export const imageString = (data) => {
    return {
        type: IMAGE,
        payload: data
    }
}

export const titleChange = (text) => {
    return {
        type: TITLE,
        payload: text
    }
}

export const cylLeft = (data) => {
    return {
        type: CYL_LEFT,
        payload: data
    }
}

export const cylRight = (data) => {
    return {
        type: CYL_RIGHT,
        payload: data
    }
}

export const addPower = (data) => {
    return {
        type: ADD_POWER,
        payload: data
    }
}

export const rightAxis = (data) => {
    return {
        type: RIGHT_AXIS,
        payload: data
    }
}

export const leftAxis = (data) => {
    return {
        type: LEFT_AXIS,
        payload: data
    }
}

export const rxLeft = (data) => {
    return {
        type: RX_LEFT,
        payload: data
    }
}

export const rxRight = (data) => {
    return {
        type: RX_RIGHT,
        payload: data
    }
}

export const quality = (data)=> {
    return {
        type: QUALITY,
        payload: data
    }
}

export const description = (data) => {
    return {
        type: DESCRIPTION,
        payload: data
    }
}

export const city = (data) => {
    return {
        type: CITY,
        payload: data
    }
}