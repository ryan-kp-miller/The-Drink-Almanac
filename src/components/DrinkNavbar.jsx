import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav} from 'react-bootstrap'

const DrinkNavbar = () => {
    const [expanded, setExpanded] = useState(false)
    const setNavbarExpanded = () => setExpanded(!expanded)
    const unexpandNavbar = () => {
        if (expanded) {setExpanded(false)}
    }
    const padding = {paddingLeft: 35}
    return (
        <Navbar style={{width:"100%"}} className="justify-content-center" bg="dark" expand="lg" variant="dark"
                onToggle={setNavbarExpanded} expanded={expanded}>
            <Navbar.Brand className="mr-auto" as={Link} style={padding} to="/">The Drink Almanac</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={setNavbarExpanded} />
            <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/random-drink">Random Drink</Nav.Link>
                    <Nav.Link as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/search-drink">Search for a Drink</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default DrinkNavbar