import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import PageHeader from "./PageHeader"
import UserForm from "./UserForm"
import { loginUser } from '../services/userRequests'

const UserLogin = ({ setJwt }) => {
    const [loginAlert, setLoginAlert] = useState(undefined)
    const history = useHistory()

    var alertStyle = ""
    var alertMessage = ""

    const loginEventListener = (event, username, password) => {
        event.preventDefault()

        const promise = loginUser(username, password)
        promise.then( response => {
            setJwt(response.data)
            alertStyle = "success"
            alertMessage = "Login was successful! Returning you to the home page."

            // wait 1 second before returning the user to the previous page
            setTimeout(() => {
                history.push("")
            }, 1000)
        }).catch(error => {
            alertStyle = "danger"
            if (error.response){
                if(error.response.status === 400 || error.response.status === 404){
                    alertMessage = `Invalid username or password.`
                } else {
                    alertMessage = "An error occurred when attempting to log into your account. Please try again later."
                } 
            }else {
                alertMessage = "An error occurred when attempting to log into your account. Please try again later."
            }
        }).finally(() => {
            setLoginAlert(
                <Alert className="text-center" variant={alertStyle}>{alertMessage}</Alert>    
            )
        })
    }

    return (
        <div className="page-background">
            <PageHeader pageTitle="Log In"/>
            <UserForm 
                formEventListener={loginEventListener} 
                formAlert={loginAlert}
                formButtonLabel='Log In' 
            />
        </div>
    )
}

export default UserLogin