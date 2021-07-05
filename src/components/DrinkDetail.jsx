import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
import { addFavorite, deleteFavorite, getUserByJWT } from '../services/userRequests'
import PageHeader from './PageHeader'
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom'

const DrinkDetail = ({ jwt, drinkJSON, additionalButton }) => {
    const history = useHistory()
    const [user, setUser] = useState({'id': undefined, 'favorites': []})
    const [isFavorited, setIsFavorited] = useState(false)
    const [favoriteAlert, setFavoriteAlert] = useState()
    
    const createFavoriteAlert = (alertStyle, alertMessage) => {
        setFavoriteAlert(
            <Alert id="favorite-alert" className="text-center" variant={alertStyle} onClose={() => setFavoriteAlert()} dismissible>{alertMessage}</Alert>    
        )
    }

    const favoriteEventListener = (event) => {
        event.preventDefault()

        if(jwt.access_token === ''){
            history.push('/login')
        }

        var alertStyle
        var alertMessage
        let promise = undefined
        if (isFavorited) {
            promise = deleteFavorite(jwt.access_token, drinkJSON.drinkID)
        }else {
            promise = addFavorite(jwt.access_token, drinkJSON.drinkID)
        }
        promise.then( () => {
            
            // add/remove the new drink to the user's favorites
            const newUser = user
            if (!isFavorited){
                newUser.favorites.push(drinkJSON.drinkID)
            }else{
                var index = newUser.favorites.indexOf(drinkJSON.drinkID);
                if (index !== -1) {
                    newUser.favorites.splice(index, 1);
                }
            }
            setUser(newUser)
            
            setIsFavorited(!isFavorited)

            // show the success alert
            alertStyle = "success"
            alertMessage = `Succesfully ${isFavorited ? "unfavorited" : "favorited"} this drink!`
            createFavoriteAlert(alertStyle, alertMessage)
        }).catch( error => {
            alertStyle = "danger"
            alertMessage = `An error occurred when attempting to ${isFavorited ? "unfavorite" : "favorite"} this drink. Please try again later.` 
                
            if(error.response){
                // if the token expired, redirect to the login page
                if(error.response.data.msg === "Token has expired"){
                    history.push("/login")
                } 
            } 
            else {
                createFavoriteAlert(alertStyle, alertMessage)
            }
        })
    }

    //once the drink data has been retrieved, check if it's been favorited by the user already
    useEffect(() => {
        const promise = getUserByJWT(jwt.access_token)
        promise.then( data => {
            if(data){
                setUser(data)
                if(data.favorites.includes(Number(drinkJSON.drinkID))){
                    setIsFavorited(true)
                }else {
                    setIsFavorited(false)
                }   
            } 
        }).catch( error => {
            //if token has expired, redirect to the login page
            if(error.response.status === 401){
                if(error.response.data.msg === "Token has expired"){
                    history.push("/login")
                }
            }
            setIsFavorited(false)
        })
    }, [drinkJSON, jwt, history])


    return (
        <div>
            <PageHeader pageTitle={drinkJSON.drinkName} additionalDiv={
                <Container id="favorite-container">
                    <Row className="justify-content-center">
                        {/* center button if there isn't an additional one, otherwise right align */}
                        <Col className={`d-flex ${additionalButton ? 'justify-content-end' : 'justify-content-center'}`}>
                            <Button size="md" className="btn btn-primary" onClick={ favoriteEventListener } variant="primary">
                                {
                                    isFavorited ?
                                        "Unfavorite this drink" :
                                        "Favorite this drink" 
                                }
                            </Button>
                        </Col>
                        {
                            additionalButton ?
                                <Col className="d-flex justify-content-start">
                                    { additionalButton }
                                </Col> :
                                undefined
                        }
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center">
                        { favoriteAlert } 
                    </Row>
                </Container>
            }/>
            <Container>
                <Container>
                    <div className="row" id="drink-details">
                        <Col md={7} lg={7} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ingredients</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            { 
                                                drinkJSON.ingredients.map((inst) => <li key={`${inst}`}>{`${inst}`}</li>)
                                            }
                                        </ul> 
                                    </Card.Text>

                                    <Card.Title>Instructions</Card.Title>
                                    <Card.Text>
                                        <p> {drinkJSON.instructions} </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <div className="col-lg-5 col-md-5 col-sm-3 d-flex justify-content-center">
                            {<Image src={ drinkJSON.imgURL } alt="..." id="drink-detail-img" className="img-thumbnail" />}
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default DrinkDetail