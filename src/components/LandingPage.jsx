import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import DrinkCarousel from './DrinkCarousel'
import IntroSection from './IntroSection'

function LandingPage() {
  return (
      <Container>
        <Row>
          <Col xs={6}> 
            <Container className="drink-container"> 
              <IntroSection/> 
            </Container> 
          </Col>

          <Col xs={6}> 
            <Container className="drink-container"> 
              <DrinkCarousel/> 
            </Container> 
          </Col>
        </Row>
      </Container>
  );
}

export default LandingPage;
