import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'




 export  const RecipeItems =props=> {
  const {name,image,mealType,dishType,dietLabels}=props;

    const Rating=()=> {
    const [rating, setRating] = useState(0) // initial rating value
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // Some logic
    }
  
    return (
      <div>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={20}
          label
          transition
          fillColor='orange'
          emptyColor='gray'
          className='foo' // Will remove the inline style if applied
        />
      </div>
    )
    }
  return(
      
                <div className="col-md-3 mt-4">
                   <div className="card py-2 text-center">
                     <img 
                     src={image} alt={name}
                     className="img-fluid w-50 mx-auto rounded-circle"
                     />
                     <div className="card-body">
                        <h5>{name}</h5>
                     </div>
                       
                     <ul className="list-group list-group-flush">
                         {/* {ingredientLines.map(ingradient=>(
                             <li className="list-group-item">{ingradient}</li>
                            
                         ))} */}
                        <li className="list-group-item">{mealType}</li>
                        <li className="list-group-item">{dishType}</li>
                        <li className="list-group-item">{dietLabels}</li>
                        <li className="list-group-item">{Rating}</li>

                     </ul>
                   </div>
                </div>
    )
  }
 