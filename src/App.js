import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import './App.css'
import DrinkNavbar from './components/DrinkNavbar'
import LandingPage from './components/LandingPage'


function App() {
  return (
    <Router className="bg" >
      <DrinkNavbar />
      <Switch>
        <Route path="/random-drink"> <LandingPage /> </Route>
        <Route path="/search-drink"> <LandingPage /> </Route>
        <Route path="/"> <LandingPage /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
