import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import DrinkNavbar from './components/DrinkNavbar'
import DrinkCarousel from './components/DrinkCarousel'
import IntroSection from './components/IntroSection'

function App() {
  return (
    <div className="bg" >
      <DrinkNavbar />
      <Container fluid>
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


    </div>
  );
}

export default App;
