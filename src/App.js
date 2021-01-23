import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import './App.css'
import { Row } from 'react-bootstrap'
import DrinkNavbar from './components/DrinkNavbar'
import LandingPage from './components/LandingPage'
import RandomDrink from './components/RandomDrink'
import Construction from './components/Construction'


function App() {
  return (
    <Router>
      <Row style={{height:"10%", width:"100%"}}> <DrinkNavbar /> </Row>
      <Row style={{height:"90%", width:"100%"}}>
        <Switch>
          <Route path="/random-drink"> <RandomDrink /> </Route>
          <Route path="/search-drink"> <Construction /> </Route>
          <Route path="/"> <LandingPage /> </Route>
        </Switch>
      </Row>
    </Router>
  );
}

export default App;
