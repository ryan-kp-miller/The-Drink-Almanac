import axios from 'axios'

const apiBaseURL = "http://127.0.0.1:5000/api"

const getUserByJWT = (jwt) => {
    const config = {
        headers: {Authorization: `Bearer ${jwt}`}
    }
    return axios.get(`${apiBaseURL}/user`, config).then(response => response.data).catch(error => console.log(error.response.data))
}

const createUser = (username, password) => {
    return axios.post(
        `${apiBaseURL}/register`, 
        {
            'username': username,
            'password': password       
        }
    )
}

const loginUser = (username, password) => {
    return axios.post(
        `${apiBaseURL}/login`, 
        {
            'username': username,
            'password': password       
        }
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export { getUserByJWT, createUser, loginUser }