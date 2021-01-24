import '../App.css'
import { Container } from 'react-bootstrap'
// import DrinkCarousel from './DrinkCarousel'
import IntroSection from './IntroSection'
import backgroundImage from '../images/cocktails.jpg'

function LandingPage({ isDesktop }) { 
  return (
    <div className="bg-img" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Container>
        <div className="drink-container"> 
          <IntroSection/> 
        </div> 
      </Container>
    </div>
  );
}

export default LandingPage;
