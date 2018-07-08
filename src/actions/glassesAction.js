export const CREATE_GLASS = "CREATE_GLASS";
export const SINGLE = "SINGLE";
export const UPDATE = "UPDATE";

export const glassesCreate = (data) => {
    return {
        type: CREATE_GLASS,
        payload: data
    }
}

export const glassSingle = (data) => {
    return {
        type: SINGLE,
        payload: data
    }
}

export const glassesUpdate = (data) => {
    return {
        type: UPDATE,
        payload: data
    }
}