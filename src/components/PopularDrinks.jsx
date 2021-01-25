import { useState, useEffect } from 'react'
import { getDrinkByID } from '../services/getDrinkData'
import DrinkList from './DrinkList'


const PopularDrinks = () => {
    const popularDrinkIDs = ["11000", "11001", "11002", 
        "11003", "11004", "11005", "11006", "11007",
        "11008", "11009"]

    const promiseArray = []
    const resultArray = []
    const [drinkJSONArray, setDrinkArray] = useState([])

    const retrieveAllDrinkJSON = () => {
        popularDrinkIDs.forEach(drinkID => {
            promiseArray.push(getDrinkByID(drinkID))
        })

        Promise.all(promiseArray).then(results => {
            results.forEach(data => {
                resultArray.push(data)
            });
            setDrinkArray(resultArray)
        });
    }
    
    //when page is loaded, make API request for random drink data
    useEffect(retrieveAllDrinkJSON, [])

    return (
        <DrinkList pageTitle="Popular Drinks" drinkJSONArray={drinkJSONArray} 
            pageDescription="Click on one of the images below to learn how to make that drink"/>
    )
}

export default PopularDrinks