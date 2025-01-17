import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function LandingPage() {
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [error, setError] = useState('');

  //using useNavigate hook to navigate to a different page
  const navigation = useNavigate();


  //taking care of the state change in the search box
  const inputChange = (event) => {
    setPokemonSearch(event.target.value);
  };

  //search submit function
  const searchSubmit = async(event) => {
    event.preventDefault();

    setError('');

    try {
      //getting it to lowercase to make sure it matches the api
      const response = await fetch(`http://localhost:5000/pokemon/${pokemonSearch.toLowerCase()}`);

      if(!response.ok){
        throw new Error('Pokemon not found');
      }

      //if found, go to the details page for more info
      navigation(`/pokemon/${pokemonSearch.toLowerCase()}`);

    } catch (error) {
      setError(error.message);
    }
  };

  //displaying the landing page with the info
  return (
    <div>
      <h1>Welcome to Pokevault!</h1>
      <p>Search for your favourite Pokémon!</p>
      
      <form onSubmit={searchSubmit}>
        <input
          type="text"
          placeholder="Enter Pokémon name here"
          value={pokemonSearch}
          onChange={inputChange}
        />
        <button type="submit">Catch!</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>Or view all Pokémon:</p>
      <Link to="/pokemon-list">
        <button>View All Pokémon</button>
      </Link>
    </div>
  );
}

export default LandingPage;