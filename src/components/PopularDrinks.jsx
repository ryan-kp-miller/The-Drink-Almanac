import DrinkList from './DrinkList'
import PageHeader from './PageHeader'


const PopularDrinks = () => {
    const popularDrinkIDs = ["11000", "11001", "11002", 
        "11003", "11004", "11005", "11006", "11007",
        "11008", "11009"]

    return (
        <div className="page-background">
            <PageHeader pageTitle="Popular Drinks" pageDescription="Click on one of the images below to learn how to make that drink"/>
            <DrinkList drinkIDArray={popularDrinkIDs} />
        </div>
    )
}

export default PopularDrinks