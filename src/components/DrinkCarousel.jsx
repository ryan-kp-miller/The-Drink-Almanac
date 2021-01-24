import React from 'react'
import { Carousel } from 'react-bootstrap'
import DrinkCarouselItem from './DrinkCarouselItem'

const DrinkCarousel = () => {
    return (
        <Carousel className="drink-carousel" indicators={false}>
            <Carousel.Item><DrinkCarouselItem title="Drink 1" imgURL="https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg" /></Carousel.Item>
            <Carousel.Item><DrinkCarouselItem title="Drink 2" imgURL="https://www.thecocktaildb.com/images/media/drink/kb4bjg1604179771.jpg" /></Carousel.Item>
        </Carousel>
    )
}

export default DrinkCarousel