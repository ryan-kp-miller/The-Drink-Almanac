import axios from 'axios'

const apiBaseURL = "/api"
// const apiBaseURL = "http://127.0.0.1:5000/api"

const getUserByJWT = (access_token) => {
    const config = {
        headers: {Authorization: `Bearer ${access_token}`}
    }
    return axios.get(`${apiBaseURL}/user`, config).then(response => response.data)
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

const addFavorite = (access_token, drinkID) => {
    const config = {
        headers: {Authorization: `Bearer ${access_token}`}
    }
    return axios.post(`${apiBaseURL}/favorite`, {'drink_id': drinkID}, config).then(response => response.data)
}

const deleteFavorite = (access_token, drinkID) => {
    const config = {
        headers: {Authorization: `Bearer ${access_token}`},
        data: {'drink_id': drinkID}
    }
    return axios.delete(`${apiBaseURL}/favorite`, config)
}

// eslint-disable-next-line import/no-anonymous-default-export
export { getUserByJWT, createUser, loginUser, addFavorite, deleteFavorite }