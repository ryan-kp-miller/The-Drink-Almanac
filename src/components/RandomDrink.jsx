import React, {useState, useEffect} from 'react'
import { getRandomDrink } from '../services/getDrinkData' 
import DrinkDetail from './DrinkDetail'

const RandomDrink = () => {
    const [drinkJSON, setDrinkJSON] = useState({
        drinkID: "",
        drinkName: "",
        instructions: "",
        imgURL: "",
        ingredients: []
    })

    const getDrinkHandler = () => getRandomDrink().then(data => setDrinkJSON(data))
    
    //when page is loaded, make API request for random drink data
    useEffect(getDrinkHandler, [])

    return (
        <DrinkDetail drinkJSON={drinkJSON} getDrinkHandler={getDrinkHandler}/>
    )
}

export default RandomDrink