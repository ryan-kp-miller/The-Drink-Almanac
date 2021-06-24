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
import DrinkDetailByID from './components/DrinkDetailByID'
import SearchForm from './components/SearchForm'
import FavoriteListByID from './components/FavoriteListByID'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'


function App() {
  const [isDesktop, setIsDesktop] = useState(true)
  const [jwt, setJwt] = useState({
    'access_token': '',
    'refresh_token': ''
  })

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
      <Row className="app-row"> 
        <DrinkNavbar 
          isDesktop={isDesktop} 
          jwt={jwt} 
          setJwt={setJwt} 
        /> 
      </Row>
      <Row className="app-content">
        <Switch>
          <Route path="/random-drink"> <RandomDrink /> </Route>
          <Route path="/popular-drinks"> <PopularDrinks /> </Route>
          <Route path="/search-drink"> <SearchForm /> </Route>
          <Route path="/register"> <UserRegister /> </Route>
          <Route path="/login"> <UserLogin setJwt={setJwt} /> </Route>
          <Route path="/favorites/:id" component={FavoriteListByID} />
          <Route path="/:id" component={DrinkDetailByID} />
          <Route path="/"> <LandingPage /> </Route>
        </Switch>
      </Row>
    </Router>
  );
}

export default App;
