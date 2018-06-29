export const TITLE = "TITLE";
export const RX_LEFT = "RX_LEFT";
export const RX_RIGHT = "RX_RIGHT";
export const QUALITY = "QUALITY";
export const DESCRIPTION = "DESCRIPTION";
export const CITY = "CITY";

export const titleChange = (text) => {
    return {
        type: TITLE,
        payload: text
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

