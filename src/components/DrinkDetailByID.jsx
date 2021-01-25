import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDrinkByID } from '../services/getDrinkData' 
import DrinkDetail from './DrinkDetail'

const DrinkDetailByID = () => {
    let { id } = useParams()
    const [drinkJSON, setDrinkJSON] = useState({
        drinkID: "",
        drinkName: "",
        instructions: "",
        imgURL: "",
        ingredients: []
    })

    const getDrinkHandler = () => getDrinkByID(id).then(data => setDrinkJSON(data))
    
    //when page is loaded, make API request for id in the URL 
    useEffect(getDrinkHandler, [])

    return (
        <DrinkDetail drinkJSON={drinkJSON} />
    )
}

export default DrinkDetailByID