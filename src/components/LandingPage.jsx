import '../App.css'
import { Container } from 'react-bootstrap'
// import DrinkCarousel from './DrinkCarousel'
import IntroSection from './IntroSection'
import desktopImage from '../images/cocktails.jpg'
import mobileImage from '../images/mobile-background.jpg'

function LandingPage({ isDesktop }) {
  const imageURL = isDesktop ? desktopImage : desktopImage;
  
  return (
    <div className="bg-img" style={{backgroundImage: `url(${imageURL})`}}>
      <Container>
        <div className="drink-container"> 
          <IntroSection/> 
        </div> 
      </Container>
    </div>
  );
}

export default LandingPage;
