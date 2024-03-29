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
import FavoriteListByID from './components/FavoriteDrinks'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import UserDeleteAccount from './components/UserDeleteAccount'


function App() {
    const storedJwt = {
        'access_token': localStorage.getItem('access_token') || '',
        'refresh_token': localStorage.getItem('refresh_token') || ''
    }
    const [jwt, setJwt] = useState(storedJwt)
    const setStoreJwt = (newJwt) => {
        localStorage.setItem('access_token', newJwt.access_token)
        localStorage.setItem('refresh_token', newJwt.refresh_token)
        setJwt(newJwt)
    }
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(()=>{
        if (window.innerWidth <= 650){
            setIsDesktop(false)
        }
    }, [])

    return (
        <Router>
            <Row className="app-row"> 
                <DrinkNavbar 
                    isDesktop={isDesktop} 
                    jwt={jwt} 
                    setJwt={setJwt} 
                /> 
            </Row>
            <Row className={`app-content ${!isDesktop ? 'iphone-buffer' : ''}`}>
                <Switch>
                    <Route path="/random-drink"> <RandomDrink jwt={jwt} /> </Route>
                    <Route path="/popular-drinks"> <PopularDrinks /> </Route>
                    <Route path="/search-drink"> <SearchForm /> </Route>
                    <Route path="/register"> <UserRegister /> </Route>
                    <Route path="/delete-account"> <UserDeleteAccount setJwt={setStoreJwt} /> </Route>
                    <Route path="/login"> <UserLogin setJwt={setStoreJwt} /> </Route>
                    <Route path="/favorites"> <FavoriteListByID jwt={jwt} /> </Route>
                    <Route path="/drink/:id"> <DrinkDetailByID jwt={jwt} /> </Route>
                    <Route path="/"> <LandingPage /> </Route>
                </Switch>
            </Row>
        </Router>
    );
}

export default App;
