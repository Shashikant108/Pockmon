
import React, { useState } from 'react';
import PokemonInfo from './PokemonInfo';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokemon not found!');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col'>
          <h1 className='text-center'>Pokemon About</h1>
          <form onSubmit={handleFormSubmit} className='d-flex'>
            <input 
              type="text"
              className='form-control mr-2 me-2'
              placeholder="Enter Pokemon name"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <button type="submit" className='btn btn-primary'>Search</button>
          </form>
          {error && <p className="mt-3 text-danger">{error}</p>}
          {pokemonData && <PokemonInfo data={pokemonData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
