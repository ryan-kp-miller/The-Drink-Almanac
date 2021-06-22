import axios from 'axios'

const baseURL = "http://127.0.0.1:5000/api/user"

const getUserByID = (userID) => {
    return axios.get(`${baseURL}/${userID}`).then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default getUserByID