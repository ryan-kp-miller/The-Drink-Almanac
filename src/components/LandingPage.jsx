import '../App.css'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
// import DrinkCarousel from './DrinkCarousel'
import IntroSection from './IntroSection'
import backgroundImage from '../images/cocktails.jpg'

function LandingPage() { 
  useEffect(() => {
    const root = document.getElementById("root")
    root.style.backgroundImage = `url(${backgroundImage})`

    // Specify how to clean up after this effect:
    return function cleanup() {
      root.style.backgroundImage = ""
    };
  }, [])

  return (
    <div className="bg-img">
      <Container>
        <div className="drink-container"> 
          <IntroSection/> 
        </div> 
      </Container>
    </div>
  );
}

export default LandingPage;
