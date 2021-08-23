import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Recipe from './components/Recipes';
import axios from 'axios'
function App() {

 const APP_ID="222b9405";
const APP_KEY="34877cb0419782f02ce6c33a97b02e1d";
  const[search,setSearch]=useState("Chiken")
  const[recipes,setRecipes]=useState([])



  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipe recipes={recipes} />
      </div>
    </div>
  );
}

export default App;