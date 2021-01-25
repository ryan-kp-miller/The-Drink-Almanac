import { Container, Row, Col, Image } from 'react-bootstrap'

const DrinkDetail = ({ drinkJSON, getDrinkHandler }) => {
    return (
        <div>
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