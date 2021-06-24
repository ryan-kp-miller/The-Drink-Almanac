import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserForm = ({ formEventListener, formAlert, formButtonLabel }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    //to allow users to hide or show their passwords when typing them in
    const [passwordFieldType, setPasswordFieldType] = useState("password")

    const validateInputs = () => {
        return username.length > 0 && password.length > 0
    }

    const showHidePassword = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPasswordFieldType(passwordFieldType === 'text' ? 'password' : 'text')
    }


    return (
        <Container className="col-sm-8 col-md-6 col-lg-4">    
            <Form onSubmit={(event) => {formEventListener(event, username, password)}}>
        
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control autoFocus value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label id="password-label" className="col-10">Password</Form.Label>
                    <Button className="col-2" variant={passwordFieldType === 'text' ? 'dark' : 'light'} onClick={showHidePassword}>
                        {passwordFieldType === 'text' ? 'Hide' : 'Show'}
                    </Button>
                    <Form.Control value={password} type={passwordFieldType} onChange={(e) => {setPassword(e.target.value)}}/>
                </Form.Group>

                <center>
                    <Button block className="col-6 justify-content-center" size="lg" type="submit" disabled={!validateInputs()}>
                        {formButtonLabel}
                    </Button>
                </center>
                <br/>
                { formAlert }

            </Form>
        </Container>
    )
}

export default UserForm