import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import PageHeader from "./PageHeader"
import UserForm from "./UserForm"
import { createUser } from '../services/getCreateUser'

const UserRegister = () => {
    const [registerAlert, setRegisterAlert] = useState(undefined)
    
    var alertStyle = ""
    var alertMessage = ""

    const registerEventListener = (event, username, password) => {
        event.preventDefault()

        const promise = createUser(username, password)
        promise.then( () => {
            alertStyle = "success"
            alertMessage = "Your account was created! Please go to the login page to sign in."
        }).catch(error => {
            if(error.response.status === 400){
                alertStyle = "danger"
                alertMessage = `An account with the username "${username}" already exists. Please pick another one.`
            } else {
                alertStyle = "danger"
                alertMessage = "An error occurred when attempting to create your account. Please try again later"
            } 
        }).finally(() => {
            setRegisterAlert(
                <Alert variant={alertStyle}>{alertMessage}</Alert>    
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