import { useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import { formatDrinkJSON, getDrinksByName } from '../services/getDrinkData'
import DrinkList from './DrinkList'
import PageHeader from './PageHeader'


const SearchForm = () => {
    const [searchText, setSearchText] = useState("")
    const [drinkJSONArray, setDrinkArray] = useState([])
    const searchForDrinks = (drinkName) => {
        const responseArray = getDrinksByName(drinkName)
        responseArray.then(drinks => {
            setDrinkArray(
                drinks.map(drink => formatDrinkJSON(drink))
            )
        })
        console.log(drinkJSONArray)
    }

    return (
        <div className="page-background">
            <PageHeader pageTitle="Search for a Drink by Name" additionalDiv={
                <Container className="input-group mt-3 justify-content-center">
                    <input className="input-group-text" type="text" onChange={event => setSearchText(event.target.value)} placeholder="Enter the name of a drink"/> 
                    <div class="input-group-append">
                        <button className="btn btn-primary" onClick={() => searchForDrinks(searchText)}>Search</button>
                    </div>
                </Container>
            }/>
            <DrinkList drinkJSONArray={drinkJSONArray} />             
        </div>
    )
}

export default SearchForm