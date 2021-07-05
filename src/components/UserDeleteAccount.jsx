import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import PageHeader from "./PageHeader"
import UserForm from "./UserForm"
import { deleteUser } from '../services/userRequests'

const UserDeleteAccount = ({ setJwt }) => {
    const [deleteAlert, setDeleteAlert] = useState(undefined)
    const history = useHistory()

    var alertStyle = ""
    var alertMessage = ""

    const deleteEventListener = (event, username, password) => {
        event.preventDefault()

        const promise = deleteUser(username, password)
        promise.then( response => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            setJwt({
                access_token: '',
                refresh_token: ''
            })
            alertStyle = "success"
            alertMessage = "Account was deleted. Returning you to the home page."

            // wait 1 second before returning the user to the previous page
            setTimeout(() => {
                history.push("")
            }, 1000)
        }).catch(error => {
            alertStyle = "danger"
            alertMessage = "An error occurred when attempting to delete your account. Please try again later."
            if (error.response){
                if(error.response.status === 400 || error.response.status === 404){
                    alertMessage = `Invalid username or password.`
                }
            }
        }).finally(() => {
            setDeleteAlert(
                <Alert className="text-center" variant={alertStyle}>{alertMessage}</Alert>    
            )
        })
    }

    return (
        <div className="page-background">
            <PageHeader pageTitle="Delete Account"/>
            <UserForm 
                formEventListener={deleteEventListener} 
                formAlert={deleteAlert}
                formButtonLabel='Delete Account' 
            />
        </div>
    )
}

export default UserDeleteAccount