import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav} from 'react-bootstrap'
import brandIcon from '../images/android-chrome-192x192.png'

const DrinkNavbar = ({ jwt, setJwt }) => {
    const [expanded, setExpanded] = useState(false)
    const setNavbarExpanded = () => setExpanded(!expanded)
    const unexpandNavbar = () => {
        if (expanded) {setExpanded(false)}
    }
    const padding = {paddingLeft: 35}
    
    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        setJwt({
            access_token: '',
            refresh_token: ''
        })
        unexpandNavbar()
    }
    
    return (
        <Navbar style={{width:"100%"}} className="justify-content-center" bg="dark" expand="lg" variant="dark"
                onToggle={setNavbarExpanded} expanded={expanded}>

            <Navbar.Brand className="mr-auto" as={Link} to="/">
                <img 
                    src={brandIcon} 
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="brandIcon"
                />
                {
                    window.innerWidth >= 650 ?
                    "   The Drink Almanac" : 
                    ""
                }
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={setNavbarExpanded} />
            <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/">Home</Nav.Link>
                    <Nav.Link className="ml-auto" style={padding} onClick={unexpandNavbar} href="/random-drink">Random Drink</Nav.Link>
                    <Nav.Link as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/popular-drinks">Popular Drinks</Nav.Link>
                    <Nav.Link as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/search-drink">Search for a Drink</Nav.Link>
                    {  jwt.access_token === "" || jwt === undefined ?
                        [
                            <Nav.Link key="1" as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/register">Sign Up</Nav.Link>,
                            <Nav.Link key="2" as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/login">Log In</Nav.Link>
                        ] :
                        [
                            <Nav.Link key="1" as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/favorites">Favorited Drinks</Nav.Link>,
                            <Nav.Link key="2" as={Link} className="ml-auto" style={padding} onClick={logout}         to="/">Log Out</Nav.Link>,
                            <Nav.Link key="3" as={Link} className="ml-auto" style={padding} onClick={unexpandNavbar} to="/delete-account">Delete Account</Nav.Link>
                        ]
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default DrinkNavbar