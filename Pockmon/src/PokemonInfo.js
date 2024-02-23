
import React from 'react';
import './style.css';

function PokemonInfo({ data }) {
  return (
    <div className='container text-center mt-5 ms-5'>
      <div className='row'>
        <div className='col-lg-1'>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} className='imgg' alt={data.name} />
        </div>
        <div className='col'>
          <div>
            <h3>Types:</h3>
            <ul>
              {data.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Abilities:</h3>
            <ul>
              {data.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;

