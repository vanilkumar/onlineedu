
export const EXPORT_DATA = 'EXPORT_DATA'

export function setDefalutStatus(d) {
    return (dispatch) => {
        dispatch({
            type: EXPORT_DATA,
            payload: d
        })
    }
};