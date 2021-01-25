import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import { useState, useEffect } from 'react'
import './App.css'
import { Row } from 'react-bootstrap'
import DrinkNavbar from './components/DrinkNavbar'
import LandingPage from './components/LandingPage'
import RandomDrink from './components/RandomDrink'
import PopularDrinks from './components/PopularDrinks'
import Construction from './components/Construction'
import DrinkDetailByID from './components/DrinkDetailByID'
import SearchForm from './components/SearchForm'


function App() {
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(()=>{
    if (window.innerWidth <= 650){
      setIsDesktop(false)
    }
  }, [])

  // to help iOS scrolling
  const preventDefault = e => e.preventDefault();
  // When rendering our container
  window.addEventListener('touchmove', preventDefault, {
    passive: false
  });
  // Remember to clean up when removing it
  window.removeEventListener('touchmove', preventDefault);

  return (
    <Router>
      <Row className="app-row"> <DrinkNavbar isDesktop={isDesktop} /> </Row>
      <Row className="app-content">
        <Switch>
          <Route path="/random-drink"> <RandomDrink /> </Route>
          <Route path="/popular-drinks"> <PopularDrinks /> </Route>
          <Route path="/search-drink"> <SearchForm /> </Route>
          <Route path="/:id" component={DrinkDetailByID} />
          <Route path="/"> <LandingPage isDesktop={isDesktop} /> </Route>
        </Switch>
      </Row>
    </Router>
  );
}

export default App;
