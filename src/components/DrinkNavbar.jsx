import { Link } from "react-router-dom"
import { Navbar, Nav} from 'react-bootstrap'

const DrinkNavbar = () => {
    const padding = {paddingLeft: 35}
    return (
        <Navbar style={{width:"100%"}} className="justify-content-center" bg="dark" variant="dark">
            <Navbar.Brand as={Link} style={padding} to="/">The Drink Almanac</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link as={Link} style={padding} to="/">Home</Nav.Link>
            <Nav.Link as={Link} style={padding} to="/random-drink">Random Drink</Nav.Link>
            <Nav.Link as={Link} style={padding} to="/search-drink">Search for a Drink</Nav.Link>
            </Nav>
        </Navbar>
    )
}


export default DrinkNavbar