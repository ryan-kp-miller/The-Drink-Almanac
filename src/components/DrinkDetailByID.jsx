import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDrinkByID } from '../services/getDrinkData' 
import DrinkDetail from './DrinkDetail'
import PageHeader from './PageHeader'

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
        <div className="page-background">
            <PageHeader pageTitle={drinkJSON.drinkName}/>
            <DrinkDetail drinkJSON={drinkJSON} />
        </div>
    )
}

export default DrinkDetailByID