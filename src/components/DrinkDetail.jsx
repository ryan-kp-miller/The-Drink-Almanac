import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { addFavorite, deleteFavorite, getUserByJWT } from '../services/userRequests'
import PageHeader from './PageHeader'
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom'

const DrinkDetail = ({ jwt, drinkJSON }) => {
    const history = useHistory()
    const [user, setUser] = useState({'id': undefined, 'favorites': []})
    const [isFavorited, setIsFavorited] = useState(false)
    const [favoriteAlert, setFavoriteAlert] = useState()
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
            alertStyle = "success"
            alertMessage = `Succesfully ${isFavorited ? "unfavorited" : "favorited"} this drink!`
            setIsFavorited(!isFavorited)
            const newUser = user
            newUser.favorites.push(drinkJSON.drinkID)
            setUser(newUser)
        }).catch( error => {
            console.log(error)
            // if the token expired, redirect to the login page
            if(error.response.data.msg === "Token has expired"){
                history.push("/login")
            }
            // otherwise, show error alert
            else{
                alertStyle = "danger"
                alertMessage = `An error occurred when attempting to ${isFavorited ? "unfavorite" : "favorite"} this drink. Please try again later.` 
            }
        }).finally(() => {
            setFavoriteAlert(
                <Alert className="text-center align-items-center" variant={alertStyle}>{alertMessage}</Alert>    
            )
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
            console.log(error)
            if(error.response.status === 401){
                console.log("error 401")
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
                        <button type="button" className="btn btn-primary" onClick={ favoriteEventListener } variant="primary">
                            {
                                isFavorited ?
                                    "Unfavorite this drink" :
                                    "Favorite this drink!" 
                            }
                        </button>
                    </Row>
                    <Row className="justify-content-center">
                        { favoriteAlert } 
                    </Row>
                </Container>
            }/>
            <Container>
                <Container>
                    <div className="row" id="drink-details">
                        <Col md={7} lg={7} xs={12}>
                            <Row>
                                <ul>
                                    { 
                                        drinkJSON.ingredients.map((inst) => <li key={`${inst}`}>{`${inst}`}</li>)
                                    }
                                </ul> 
                            </Row>
                            <Row>
                                <p> {drinkJSON.instructions} </p>
                            </Row>
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