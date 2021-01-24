import axios from 'axios'

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1"

const getRandomDrink = () => {
    return axios.get(`${baseURL}/random.php`).then(response => formatDrinkJSON(response.data.drinks[0]))
}

const formatDrinkJSON = drinkJSON => {
    const formattedDrinkJSON = {
        drinkID: drinkJSON.idDrink,
        drinkName: drinkJSON.strDrink,
        instructions: drinkJSON.strInstructions,
        imgURL: drinkJSON.strDrinkThumb,
        ingredients: [],
    }

    // retrieve ingredients and measures, and store them in the formatted object
    for (let i=1; i < 16; i++){
        // if there are no more ingredients return the formatted object
        if (!drinkJSON[`strIngredient${i}`]) {return formattedDrinkJSON}

        if (!drinkJSON[`strMeasure${i}`]) {
            formattedDrinkJSON.ingredients.push(drinkJSON[`strIngredient${i}`])
        }
        else {
            formattedDrinkJSON.ingredients.push(
                    // add "of " if measure doesn't already include it
                    drinkJSON[`strMeasure${i}`].includes("of") ? 
                        drinkJSON[`strMeasure${i}`].trim() + ' ' + drinkJSON[`strIngredient${i}`] :
                        drinkJSON[`strMeasure${i}`] + "of " + drinkJSON[`strIngredient${i}`] 
            )
        }
    }

    return formattedDrinkJSON
}

export default getRandomDrink