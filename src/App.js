import React, { useState, useEffect } from 'react'
import './App.css';
import Recipe from './Components/Recipe/index';


function App() {

  const APP_ID = 'your id here';
  const APP_KEY = 'your app key here';

  const exampleUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;



  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

  return (
    <div className="App">

      <h1 className='titulo'>Recipp</h1>
      <h2 className='subtitulo'>O app de receitas feito para todos os gostos!</h2>

      <form className='search-form' onSubmit={getSearch}>
        <input placeholder='Procurar Receita' className='search-bar' type='text' value={search} onChange={updateSearch}></input>
        <button className='search-button' type='submit'

        >Pesquisar!</button>

      </form>

      <div className='recipes-container'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            fitlevel={recipe.recipe.dietLabels}
            ingredients={recipe.recipe.ingredients}

          ></Recipe>
        ))}

      </div>

    </div>
  );
}

export default App;
