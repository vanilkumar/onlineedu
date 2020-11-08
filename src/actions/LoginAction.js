import axios from 'axios';
export const PROJECT_DATA = 'PROJECT_DATA';
export const LOGIN_DATA = 'LOGIN_DATA';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

/*export const PROJECT_DATA = 'PROJECT_DATA';
export const PROJECT_DATA = 'PROJECT_DATA';*/


export function projectList() {
    const url = 'http://10.10.41.115:8080/projecttracker/projects';
    //const url = 'http://localhost:8080/projecttracker/projects';
    return (dispatch) => {
        axios.get(url)
            .then((response) => {
                console.info(9999, 'response', response)
                dispatch({
                    type: PROJECT_DATA,
                    payload: response
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
export function createAcc(data) {
    // const url = 'http://10.10.41.115:8080/projecttracker/projects';
    const url = 'https://dev-anilv-services.herokuapp.com/api/v1/account/create';
    const obj = {
        userEmail: "anilvand@gmail.com",
    userPassword: "test123",
    userMobile :"9994054460",
    userCountry:"INDIA",
    userRole: "USER"}
    return (dispatch) => {
        const headers = {
            'Content-Type': 'application/json',
        }

        axios.post(url,obj,{headers:
            {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            console.info(9999, 'action', response)
            dispatch({
                type: CREATE_ACCOUNT,
                payload: response.data
            })
        })
        .catch((response) => { return Promise.reject(response); });
    };
}