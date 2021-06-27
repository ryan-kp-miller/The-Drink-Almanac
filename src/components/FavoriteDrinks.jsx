import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { getUserByJWT } from '../services/userRequests'
import { retrieveMultipleDrinks } from '../services/getDrinkData'
import PageHeader from './PageHeader'
import DrinkList from './DrinkList'

const FavoriteDrinks = ({ jwt }) => {
    const history = useHistory()
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
    
    // send user to login page if no JWT
    useEffect( () => {
        if (jwt.access_token === ''){
            history.push("/login")
        }
    }, [jwt, history])

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

export default FavoriteDrinks