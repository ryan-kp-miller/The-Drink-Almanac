import '../App.css'
import { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import backgroundImage from '../images/cocktails.jpg'
import PageHeader from './PageHeader'
import PageIntroCard from './PageIntroCard'

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
        <Container className="justify-content-center">
            <PageHeader pageTitle="The Drink Almanac" additionalDiv={<p className="lead text-center">Online database of beginner-friendly cocktail recipes</p>} />
            <br/>
            <Container>
                <Row>
                    <Col xs={12} md={6} >
                        <PageIntroCard 
                            pageName="Search for a Drink" 
                            pageDescription="Search for a drink by name" 
                            pageUrl="/search-drink" 
                        /> 
                    </Col>
                    <Col xs={12} md={6} >
                        <PageIntroCard 
                            pageName="Popular Drinks" 
                            pageDescription="See a list of popular drinks" 
                            pageUrl="/popular-drinks" 
                        /> 
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} >
                        <PageIntroCard 
                            pageName="Favorited Drinks" 
                            pageDescription="See the drinks you've favorited" 
                            pageUrl="/favorites" 
                        /> 
                    </Col>
                    <Col xs={12} md={6} >
                        <PageIntroCard 
                            pageName="Random Drink" 
                            pageDescription="Check out a random drink" 
                            pageUrl="/random-drink" 
                        /> 
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default LandingPage;
