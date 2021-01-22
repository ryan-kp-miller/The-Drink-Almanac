import React from 'react'
import { Carousel, Image, Row, Col } from 'react-bootstrap'

const DrinkCarousel = () => {
    return (
        <Carousel className="drink-carousel" indicators={false}>
            <Carousel.Item>
                <h2 className="drink-carousel-item-header text-white">Drink 1</h2>
                <Row>
                    <Col></Col>
                    <Col><Image src="https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg" thumbnail /></Col>
                    <Col></Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <h2 className="drink-carousel-item-header text-white">Drink 2</h2>
                <Row>
                    <Col></Col>
                    <Col><Image src="https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg" thumbnail /></Col>
                    <Col></Col>
                </Row>
            </Carousel.Item>

        </Carousel>
    )
}

export default DrinkCarousel