import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getUserByID } from '../services/userRequests'
import PageHeader from './PageHeader'
import DrinkList from './DrinkList'

const FavoriteListByID = () => {
    let { id } = useParams()
    const [userJSON, setUserJSON] = useState({
        id: "",
        username: "",
        favorites: []
    })
    
    const getUserHandler = () => getUserByID(id).then(data => {
        setUserJSON(data)
    })
    
    //when userJSON.favorites is modified, make API request for all drink ids in favorites 
    useEffect(getUserHandler, [id])
    
    return (
        <div className="page-background">
            <PageHeader pageTitle={`${userJSON.username}'s Favorited Drinks`}/>
            <DrinkList drinkIDArray={userJSON.favorites} />
        </div>
    )
}

export default FavoriteListByID