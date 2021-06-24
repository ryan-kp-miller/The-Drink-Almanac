import axios from 'axios'

const apiBaseURL = "http://127.0.0.1:5000/api"

const getUserByID = (userID) => {
    return axios.get(`${apiBaseURL}/user/${userID}`).then(response => response.data)
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
export { getUserByID, createUser, loginUser }