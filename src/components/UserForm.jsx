import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserForm = ({ formEventListener, formAlert, formButtonLabel }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const validateInputs = () => {
        return username.length > 0 && password.length > 0
    }

    return (
        <Container className="col-sm-8 col-md-6 col-lg-4 justify-content-md-center">    
            <Form onSubmit={(event) => {formEventListener(event, username, password)}}>
        
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control autoFocus value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateInputs()}>
                    {formButtonLabel}
                </Button>
                <br/>
                { formAlert }

            </Form>
        </Container>
    )
}

export default UserForm