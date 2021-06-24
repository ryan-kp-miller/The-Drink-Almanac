import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getUserByID } from '../services/userRequests'
import { retrieveMultipleDrinks } from '../services/getDrinkData'
import PageHeader from './PageHeader'
import DrinkList from './DrinkList'

const FavoriteListByID = () => {
    let { id } = useParams()
    const [userJSON, setUserJSON] = useState({
        id: "",
        username: "",
        favorites: []
    })
    const [drinkArray, setDrinkArray] = useState([])
    
    const getUserHandler = () => getUserByID(id).then(data => {
        setUserJSON(data)
    })
    
    //when userJSON.favorites is modified, make API request for all drink ids in favorites 
    useEffect(getUserHandler, [id])
    useEffect( () => retrieveMultipleDrinks(userJSON.favorites, setDrinkArray), [userJSON])
    
    return (
        <div className="page-background">
            <PageHeader pageTitle={`${userJSON.username}'s Favorited Drinks`}/>
            <DrinkList drinkJSONArray={drinkArray} />
        </div>
    )
}

export default FavoriteListByID