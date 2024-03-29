import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import PageHeader from "./PageHeader"
import UserForm from "./UserForm"
import { createUser } from '../services/userRequests'

const UserRegister = () => {
    const [registerAlert, setRegisterAlert] = useState(undefined)
    const history = useHistory()

    var alertStyle = ""
    var alertMessage = ""

    const registerEventListener = (event, username, password) => {
        event.preventDefault()

        const promise = createUser(username, password)
        promise.then( () => {
            alertStyle = "success"
            alertMessage = "Your account was created! Going to the log in page."
            
            // wait 2 seconds before going to home page
            setTimeout(() => {
                history.push("/login")
            }, 2000)
        }).catch(error => {
            alertStyle = "danger"
            if (error.response){
                if(error.response.status === 400){
                    alertMessage = `A user with that username already exists.`
                } else {
                    alertMessage = "An error occurred when attempting to log into your account. Please try again later."
                } 
            }else {
                alertMessage = "An error occurred when attempting to log into your account. Please try again later."
            }
        }).finally(() => {
            setRegisterAlert(
                <Alert className="text-center" variant={alertStyle}>{alertMessage}</Alert>    
            )
        })
    }

    return (
        <div className="page-background">
            <PageHeader pageTitle="Create an Account"/>
            <UserForm 
                formEventListener={registerEventListener} 
                formAlert={registerAlert}
                formButtonLabel='Create Account' 
            />
        </div>
    )
}

export default UserRegister