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
            alertMessage = "Login was successful! Returning you to the previous page."

            // wait 1 second before returning the user to the previous page
            setTimeout(() => {
                history.goBack()
            }, 1000)
        }).catch(error => {
            if(error.response.status === 400){
                alertStyle = "danger"
                alertMessage = `Invalid username or password.`
            } else {
                alertStyle = "danger"
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