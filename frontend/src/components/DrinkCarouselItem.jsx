import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const DrinkCarouselItem = ({ title, imgURL }) => {
    return (
        <div>
            <h2 className="drink-carousel-item-header text-white">{ title }</h2>
            <Row>
                <Col></Col>
                <Col xs={6}><Image src={imgURL} thumbnail /></Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default DrinkCarouselItem