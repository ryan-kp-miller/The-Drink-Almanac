import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import getRandomDrink from '../services/getRandomDrink' 

const RandomDrink = ({ isDesktop}) => {
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
        <div id="random-drink-background">
            <Container>
                <div className="drink-jumbo">
                    <h2 className="text-center">{ drinkJSON.drinkName }</h2>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" onClick={ getDrinkHandler } variant="primary">Find a drink!</button>
                    </div>
                </div>

                <Container>
                    <div className="row" id="random-drink-details">
                        <Col lg={7} xs={12}>
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
                        <div className="col-lg-5 col-sm-3 d-flex justify-content-center">
                            {<Image src={ drinkJSON.imgURL } alt="..." id="random-drink-img" className="img-thumbnail" />}
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default RandomDrink