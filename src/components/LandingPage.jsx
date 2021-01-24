import '../App.css'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
// import DrinkCarousel from './DrinkCarousel'
import IntroSection from './IntroSection'
import desktopImage from '../images/background.jpg'
import mobileImage from '../images/mobile-background.jpg'

function LandingPage() {
  const imageURL = window.innerWidth >= 650 ? desktopImage : mobileImage;
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);
  
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
