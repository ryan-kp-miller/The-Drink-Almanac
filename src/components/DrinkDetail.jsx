import { Container, Row, Col, Image } from 'react-bootstrap'

const DrinkDetail = ({ drinkJSON, getDrinkHandler }) => {
    return (
        <div id="drink-detail-background">
            <Container>
                <div className="drink-jumbo">
                    <h2 className="text-center">{ drinkJSON.drinkName }</h2>
                    {
                        getDrinkHandler ?
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-primary" onClick={ getDrinkHandler } variant="primary">Find a drink!</button>
                        </div> :
                        undefined
                    }
                </div>

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