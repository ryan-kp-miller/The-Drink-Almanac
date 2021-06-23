import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import PageHeader from "./PageHeader"
import { createUser } from '../services/getCreateUser'

const UserRegister = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [registerAlert, setRegisterAlert] = useState(undefined)
    
    var alertStyle = ""
    var alertMessage = ""

    const validateInputs = () => {
        return username.length > 0 && password.length > 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted")

        const promise = createUser(username, password)
        promise.then( () => {
            alertStyle = "success"
            alertMessage = "Your account was created! Please go to the login page to sign in."

            setRegisterAlert(
                <Alert variant={alertStyle}>{alertMessage}</Alert>    
            )
        }).catch(error => {
            if(error.response.status === 400){
                alertStyle = "danger"
                alertMessage = `An account with the username "${username}" already exists. Please pick another one.`
            } else {
                alertStyle = "danger"
                alertMessage = "An error occurred when attempting to create your account. Please try again later"
            } 
            setRegisterAlert(
                <Alert variant={alertStyle}>{alertMessage}</Alert>    
            )
        })
    }

    return (
        <div className="page-background">
            <PageHeader pageTitle="Create an Account"/>

            <Container className="col-sm-8 col-md-6 col-lg-4 justify-content-md-center">
                
                <Form onSubmit={handleSubmit}>
            
                    <Form.Group size="lg" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control autoFocus value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Button block size="lg" type="submit" disabled={!validateInputs()}>
                        Create Account
                    </Button>
                    <br/>
                    { registerAlert }

                </Form>
            
            </Container>
        </div>
    )
}

export default UserRegister