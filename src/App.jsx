import './App.css'
import {useEffect, useState} from "react";
import Card from "./components/Card.jsx";
import axios from "axios";

function App() {

const [pokemon, setPokemon] = useState({});
const [pokemonInfo, setPokemonInfo] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {

        async function getPokemon() {
            try { const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
                setLoading(true);
                setPokemon(response.data);
            } catch(e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        async function getPokemonInfo() {
            try { const response = await axios.get(`${pokemon.url}/`);
                setLoading(true);
                setPokemonInfo(response.data);
            } catch(e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

    }, []);

  return (
    <>
      <h1>Gotta catch em all!</h1>
        <button
            type="button"
            onClick={() => {}}
        >Vorige</button>
        <button
            type="button"
            onClick={() => {}}
        >Vorige</button>


        {pokemon && pokemon.length > 0 && (
            const result = pokemon.map((pokemon) => (
                return(
                    <Card
                        name={pokemon.name}
                        imgUrl={pokemonInfo.}
                        nrOfMoves={pokemonInfo.}
                        weight={pokemonInfo.}
                        ability={pokemonInfo.}
                    />
            )
            ))
        )}
</>
    )
}

export default App
