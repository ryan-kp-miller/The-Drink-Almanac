import React, {useState, useEffect} from 'react'
import { getUserByJWT } from '../services/userRequests'
import { retrieveMultipleDrinks } from '../services/getDrinkData'
import PageHeader from './PageHeader'
import DrinkList from './DrinkList'

const FavoriteListByID = ({ jwt }) => {
    const [userJSON, setUserJSON] = useState({
        id: "",
        username: "",
        favorites: []
    })
    const [drinkArray, setDrinkArray] = useState([])
    
    const getUserHandler = () => {
        if(jwt.access_token !== ""){
            getUserByJWT(jwt.access_token).then(data => {
                setUserJSON(data)
            })
        }
    }
    
    //when userJSON.favorites is modified, make API request for all drink ids in favorites 
    useEffect(getUserHandler, [jwt])
    useEffect( () => retrieveMultipleDrinks(userJSON.favorites, setDrinkArray), [userJSON])
    
    return (
        <div className="page-background">
            <PageHeader pageTitle={`${userJSON.username}'s Favorited Drinks`}/>
            <DrinkList drinkJSONArray={drinkArray} />
        </div>
    )
}

export default FavoriteListByID