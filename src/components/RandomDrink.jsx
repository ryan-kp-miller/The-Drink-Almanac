import React, {useState, useEffect} from 'react'
import { getRandomDrink } from '../services/getDrinkData' 
import DrinkDetail from './DrinkDetail'
import PageHeader from './PageHeader'

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
        <div className="page-background">
            <PageHeader pageTitle={drinkJSON.drinkName} additionalDiv={
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={ getDrinkHandler } variant="primary">Find a drink!</button>
                </div>
            }/>
            <DrinkDetail drinkJSON={drinkJSON} getDrinkHandler={getDrinkHandler}/>
        </div>
    )
}

export default RandomDrink