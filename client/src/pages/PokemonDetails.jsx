import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const { name } = useParams();
  return (
    <div>
      <h1>Details of {name}</h1>
    </div>
  );
}

export default PokemonDetails;
