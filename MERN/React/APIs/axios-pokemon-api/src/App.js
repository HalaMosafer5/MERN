import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const App = () => {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const names = response.data.results.map(pokemon => pokemon.name);
      setPokemonNames(names);
    } catch (error) {
      console.error("Error fetching the Pokémon data", error);
    }
  };

  return (
    <div className="app-container">
      <button className="fetch-button" onClick={fetchPokemon}>Fetch Pokémon</button>
      <ul className="pokemon-list">
        {pokemonNames.map((name, index) => (
          <li key={index} className="pokemon-list-item">{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;