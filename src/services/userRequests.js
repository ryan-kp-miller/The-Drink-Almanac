import axios from 'axios'

// for prod
const apiBaseURL = "https://thedrinkalmanacapi.herokuapp.com"

// for dev
// const apiBaseURL = "http://127.0.0.1:5000"

const getUserByJWT = (access_token) => {
    const config = {
        headers: {Authorization: `Bearer ${access_token}`}
    }
    return axios.get(`${apiBaseURL}/user`, config).then(response => response.data)
}

const createUser = (username, password) => {
    return axios.post(
        `${apiBaseURL}/user/register`, 
        {
            'username': username,
            'password': password       
        }
    )
}

const loginUser = (username, password) => {
    return axios.post(
        `${apiBaseURL}/user/login`, 
        {
            'username': username,
            'password': password       
        }
    )
}

const deleteUser = (username, password) => {
    return axios.delete(
        `${apiBaseURL}/user`, 
        { data: 
            {
                'username': username,
                'password': password       
            }
        }
    )
}

const addFavorite = (access_token, drinkID) => {
    const config = {
        headers: {Authorization: `Bearer ${access_token}`}
    }
    return axios.post(`${apiBaseURL}/favorite/${drinkID}`, {}, config).then(response => response.data)
}

const deleteFavorite = (access_token, drinkID) => {
    const config = {
        headers: {Authorization: `Bearer ${access_token}`},
    }
    return axios.delete(`${apiBaseURL}/favorite/${drinkID}`, config)
}

// eslint-disable-next-line import/no-anonymous-default-export
export { getUserByJWT, createUser, loginUser, addFavorite, deleteFavorite, deleteUser }