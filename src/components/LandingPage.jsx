import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import DrinkCarousel from './DrinkCarousel'
import IntroSection from './IntroSection'

function LandingPage() {
  return (
    <div className="bg-img">
      <Container>
        <Row>
          <Col xs={5}> 
            <Container className="drink-container"> 
              <IntroSection/> 
            </Container> 
          </Col>

          <Col xs={6}> 
            {/* <Container className="drink-container"> 
              <DrinkCarousel/> 
            </Container>  */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
