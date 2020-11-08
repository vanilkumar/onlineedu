import axios from 'axios';
export const PROJECT_DATA = 'PROJECT_DATA';
export const CREATE_DATA = 'CREATE_DATA';
/*export const PROJECT_DATA = 'PROJECT_DATA';
export const PROJECT_DATA = 'PROJECT_DATA';*/

export function createproject(data) {
    const url = 'http://10.10.41.115:8080/projecttracker/project/add'
    const obj = {}
    return (dispatch) => {
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.post(url,{
            headers: headers
        })
        .then((response) => {
            console.info(9999, 'action', response)
            dispatch({
                type: LOGIN_DATA,
                payload: response.data
            })
        })
        .catch((response) => { return Promise.reject(response); });
    };
}
export function login(data) {
    // const url = 'http://10.10.41.115:8080/projecttracker/projects';
    const url = 'http://localhost:8080/projecttracker/login?username=Jit&password=1234';
    const obj = {}
    return (dispatch) => {
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.post(url,{
            headers: headers
        })
        .then((response) => {
            console.info(9999, 'action', response)
            dispatch({
                type: LOGIN_DATA,
                payload: response.data
            })
        })
        .catch((response) => { return Promise.reject(response); });
    };
}