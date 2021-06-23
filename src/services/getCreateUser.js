import axios from 'axios'

const baseURL = "http://127.0.0.1:5000/api"

const getUserByID = (userID) => {
    return axios.get(`${baseURL}/user/${userID}`).then(response => response.data)
}

const createUser = (username, password) => {
    return axios.post(
        `${baseURL}/register`, 
        {
            'username': username,
            'password': password       
        }
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export { getUserByID, createUser }