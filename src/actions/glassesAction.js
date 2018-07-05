export const CREATE_GLASS = "CREATE_GLASS";

export const glassesCreate = (data) => {
    return {
        type: CREATE_GLASS,
        payload: data
    }
}