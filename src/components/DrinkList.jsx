import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { getDrinkByID } from '../services/getDrinkData'


const DrinkList = ({ drinkIDArray }) => {
    const promiseArray = []
    const resultArray = []
    const [drinkJSONArray, setDrinkArray] = useState([])

    const retrieveAllDrinkJSON = () => {
        // if(drinkIDArray !== undefined){
            drinkIDArray.forEach(drinkID => {
                promiseArray.push(getDrinkByID(drinkID))
            })
    
            Promise.all(promiseArray).then(results => {
                results.forEach(data => {
                    resultArray.push(data)
                });
                setDrinkArray(resultArray)
            });
        // }
    }
    
    //when page is loaded, make API request for random drink data
    useEffect(retrieveAllDrinkJSON)

    return (
            <Container>
                <Container>
                    <Row>
                        {
                            drinkJSONArray.map(drinkJSON => {
                                return (
                                    <div key={drinkJSON.drinkName} className="col-lg-4 col-6 px-0">
                                        <a href={`/${drinkJSON.drinkID}`} ><img className="img-thumbnail img-fluid" src={drinkJSON.imgURL} alt="" /></a> 
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

export default DrinkList