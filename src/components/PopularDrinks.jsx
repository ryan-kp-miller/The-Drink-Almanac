import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { getDrinkByID } from '../services/getDrinkData'
import DrinkDetail from './DrinkDetail'


const PopularDrinks = () => {
    const popularDrinkIDs = ["11000", "11001", "11002", 
        "11003", "11004", "11005", "11006", "11007",
        "11008", "11009"]

    const promiseArray = []
    const resultArray = []
    const [drinkJSONArray, setDrinkArray] = useState([])

    const clickDrinkImage = (drinkID) => {
        return
    }

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
        <Container>
            <div className="drink-jumbo">
                <h2 className="text-center">Popular Drinks</h2>
            </div>

            <Container>
                <Row>
                    {
                        drinkJSONArray.map(drinkJSON => {
                            return (
                                <div key={drinkJSON.drinkName} className="col-lg-4 col-6 px-0">
                                    <img className="img-thumbnail img-fluid" src={drinkJSON.imgURL} alt="" />
                                    <p className="drink-image-label text-center">{drinkJSON.drinkName}</p>
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default PopularDrinks