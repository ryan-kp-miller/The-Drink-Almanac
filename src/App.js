import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import './App.css'
import DrinkNavbar from './components/DrinkNavbar'
import LandingPage from './components/LandingPage'
import RandomDrink from './components/RandomDrink'
import Construction from './components/Construction'


function App() {
  return (
    <Router className="bg" >
      <DrinkNavbar />
      <Switch>
        <Route path="/random-drink"> <RandomDrink /> </Route>
        <Route path="/search-drink"> <Construction /> </Route>
        <Route path="/"> <LandingPage /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
