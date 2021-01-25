import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { formatDrinkJSON, getDrinksByName } from '../services/getDrinkData'
import DrinkList from './DrinkList'
import PageHeader from './PageHeader'


const SearchForm = () => {
    const [searchText, setSearchText] = useState("")
    const [hasSearched, setHasSearched] = useState(false)
    const [drinkJSONArray, setDrinkArray] = useState([])
    const searchForDrinks = (drinkName) => {
        setHasSearched(true)
        const responseArray = getDrinksByName(drinkName)
        responseArray.then(drinks => {
            if (!drinks) {
                setDrinkArray([])
                return
            }
            setDrinkArray(
                drinks.map(drink => formatDrinkJSON(drink))
            )
        })
    }

    return (
        <div className="page-background">
            <PageHeader pageTitle="Search for a Drink by Name" additionalDiv={
                <Container className="input-group mt-3 justify-content-center">
                    <input className="input-group-text" type="text" onChange={event => setSearchText(event.target.value)} placeholder="Enter the name of a drink"/> 
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={() => searchForDrinks(searchText)}>Search</button>
                    </div>
                </Container>
            }/>
            {
                hasSearched ?
                    drinkJSONArray.length > 0 ?
                        <DrinkList drinkJSONArray={drinkJSONArray} /> :
                        <p className="text-center">Sorry, no drinks were found with that name.</p> :
                    undefined
            }
        </div>
    )
}

export default SearchForm