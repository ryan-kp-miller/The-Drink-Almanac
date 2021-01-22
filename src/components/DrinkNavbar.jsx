import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'

const DrinkNavbar = () => {
    return (
        <Navbar className="justify-content-center" bg="dark" variant="dark">
            <Navbar.Brand href="#home">The Drink Almanac</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#random-drink">Random Drink</Nav.Link>
            <Nav.Link href="#search-drink">Search for a Drink</Nav.Link>
            </Nav>
        </Navbar>
    )
}


export default DrinkNavbar