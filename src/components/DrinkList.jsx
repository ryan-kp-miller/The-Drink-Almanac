import { Container, Row } from 'react-bootstrap'


const DrinkList = ({ drinkJSONArray }) => {
    return (
            <Container>
                <Container>
                    <Row>
                        {
                            drinkJSONArray.map(drinkJSON => {
                                return (
                                    <div key={drinkJSON.drinkName} className="col-lg-4 col-6 px-0">
                                        <a href={`/${drinkJSON.drinkID}`} ><img className="img-thumbnail img-fluid" src={drinkJSON.imgURL} alt="" /></a> 
                                        <p className="drink-image-label text-center">{drinkJSON.drinkName}</p>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </Container>
    )
}

export default DrinkList