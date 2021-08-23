import React from 'react'
import {RecipeItems} from './RecipeItmes'
const Recipes=props=> {
    const{recipes}=props;
    return (
        <div class="row">
           {recipes.map(recipe=>(
                <RecipeItems
                  key={Math.random() * 100}
                  name={recipe.recipe.label}
                  image={recipe.recipe.image}
                  mealType={recipe.recipe.mealType}
                  dishType={recipe.recipe.dishType}
                  dietLabels={recipe.recipe.dietLabels}
                />
                
                ))}
        </div>
    )
}

export default Recipes
