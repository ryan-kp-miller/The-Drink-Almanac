import { useState, useEffect } from 'react'
import DrinkList from './DrinkList'
import PageHeader from './PageHeader'
import { retrieveMultipleDrinks } from '../services/getDrinkData'


const PopularDrinks = () => {   
    const [drinkJSONArray, setDrinkArray] = useState([])

    //when page is loaded, make API request for random drink data
    useEffect( () => {
        const popularDrinkIDs = ["11000", "11001", "11002", 
        "11003", "11004", "11005", "11006", "11007",
        "11008", "11009"]
    
        retrieveMultipleDrinks(popularDrinkIDs, setDrinkArray)
    }, [])

    return (
        <div className="page-background">
            <PageHeader pageTitle="Popular Drinks" pageDescription="Click on one of the images below to learn how to make that drink"/>
            <DrinkList drinkJSONArray={drinkJSONArray} />
        </div>
    )
}

export default PopularDrinks