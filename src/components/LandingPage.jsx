import '../App.css'
import { useEffect } from 'react'
import backgroundImage from '../images/cocktails.jpg'
import PageHeader from './PageHeader'

function LandingPage() { 
  useEffect(() => {
    const root = document.getElementById("root")
    root.style.backgroundImage = `url(${backgroundImage})`

    // remove the background image when switching to different page
    return function cleanup() {
      root.style.backgroundImage = ""
    };
  }, [])

  return (
    <PageHeader pageTitle="The Drink Almanac" additionalDiv={<p className="lead text-center">Learn how to make a wide variety of drinks</p>} />
  );
}

export default LandingPage;
