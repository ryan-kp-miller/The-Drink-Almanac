import React, {useState, useEffect} from 'react'
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap'
import getRandomDrink from '../services/getRandomDrink' 

const RandomDrink = () => {
    const [drinkJSON, setDrinkJSON] = useState({
        drinkID: "",
        drinkName: "",
        instructions: "",
        imgURL: "",
        ingredients: []
    })

    const getDrinkHandler = () => getRandomDrink().then(data => setDrinkJSON(data))
    
    //when page is loaded, make API request for random drink data
    useEffect(getDrinkHandler, [])

    return (
        <Container className="bg-black">
            <Jumbotron className="drink-jumbo">
                <h2 className="display-4 text-center">{ drinkJSON.drinkName }</h2>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={ getDrinkHandler } variant="primary">Find a drink!</button>
                </div>
            </Jumbotron>

            <Container>
                <div className="row">
                    <Col xs={6}>
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
                    <div className="col-6 d-flex justify-content-center">
                        {<Image src={ drinkJSON.imgURL } alt="..." id="random-drink-img" className="img-thumbnail" />}
                    </div>
                </div>
            </Container>

        </Container>
    )
}

export default RandomDrink