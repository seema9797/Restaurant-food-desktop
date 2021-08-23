import React from 'react'


const Header=props=> {
    const{search,onInputChange}=props
  

    return (
        <div className="jumbotron">
            <h1 className="display-1"> 
<span className="material-icons brand-icon">
fastfood
</span>            Food Recipe
            </h1>
          
            <div className="input-group mb-3 w-50 mx-auto">
            <input type="text" 
            className="form-control"
             placeholder="Search Your Recipes"
             value={search}
             onChange={onInputChange}
             />
            <button className="input-group-text btn btn-danger">Search Recipes</button>
</div>
        </div>
    )
}

export default Header
