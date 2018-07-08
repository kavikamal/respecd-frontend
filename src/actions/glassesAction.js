export const CREATE_GLASS = "CREATE_GLASS";
export const SINGLE = "SINGLE";

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