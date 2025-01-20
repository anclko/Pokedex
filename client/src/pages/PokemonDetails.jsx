import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function PokemonDetails() {
  //useParams will allow the name to be extracted and used for searches
  const { name } = useParams();
  const [pokemon , setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  const fetchPokemonDetails = async () => {
    //no error and loading is going on
    setError("");
    setLoading(true);

    //fetching
    try {
      //fetching and if not okay-> throw error
      const response = await fetch(`http://localhost:5000/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }

      //otherwise, return the details and save to the state
      const details = await response.json();
      setPokemon(details);

    } catch (error) {
      //if error, set the error message
      setError(error.message);

    } finally {
      //loading finished
      setLoading(false);
    }
  };

  fetchPokemonDetails();
}, [name]);

  if (loading) {
    return <p>Catching...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }


  //display the pokemon info
  return (
    <div>
      <h1>{pokemon?.name}</h1>
      {pokemon?.sprites && (
        <img 
        src={pokemon.sprites} 
        alt={pokemon.name} 
        style = {{ width: '200px', height: '200px', objectFit: 'contain' }}
        />
      )}
      <p>Base Experience: {pokemon?.base_experience}</p>
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
      <p>Abilities: {pokemon?.abilities?.join(', ')}</p>
      <p>Types: {pokemon?.types?.join(', ')}</p>

      <Link to="/">Return</Link>
    </div>
  );
}

export default PokemonDetails;
