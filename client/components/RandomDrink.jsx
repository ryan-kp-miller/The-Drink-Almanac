import React, {useState, useEffect} from 'react'
import { getRandomDrink } from '../services/getDrinkData' 
import DrinkDetail from './DrinkDetail'

const RandomDrink = ({ jwt }) => {
    const [drinkJSON, setDrinkJSON] = useState({
        drinkID: "",
        drinkName: "",
        instructions: "",
        imgURL: "",
        ingredients: []
    })

    const getDrinkHandler = () => getRandomDrink().then(data => {
        setDrinkJSON(data)
    })
    
    //when page is loaded, make API request for random drink data
    useEffect(getDrinkHandler, [])

    return (
        <div className="page-background">
            <DrinkDetail jwt={jwt} drinkJSON={drinkJSON} getDrinkHandler={getDrinkHandler}/>
        </div>
    )
}

export default RandomDrink