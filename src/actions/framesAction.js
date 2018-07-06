export const CREATE_FRAME = "CREATE_FRAME";

export const createFrame = (data) => {
    return {
        type: CREATE_FRAME,
        payload: data
    }
}