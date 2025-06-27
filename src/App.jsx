import './App.css'
import {useEffect, useState} from "react";
import Card from "./components/Card.jsx";
import axios from "axios";

function App() {

const [pokemonList, setPokemonList] = useState([]);
const [pokemonDetails, setPokemonDetails] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [page, setPage] = useState(0);
const offset = page * 20;

    useEffect(() => {

        async function catchEmAll() {
            setLoading(true);
            try { const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
                const results = response.data.results;

                const details = [];
                for (const pokemon of results) {
                    const res = await axios.get(pokemon.url);
                    details.push(res.data);
                }

                setPokemonList(results);
                setPokemonDetails(details);

            } catch(e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        catchEmAll();

    }, [page]);

  return (
    <>
      <div className="page-container">
      <h1>Gotta catch em all!</h1>
          <div className="buttons">
            <button
                type="button"
                onClick={() => {setPage(page - 1)}}
                disabled={page === 0}
            >Vorige</button>
            <button
                type="button"
                onClick={() => {setPage(page + 1)}}
            >Vorige</button>
          </div>

        <div className="pokemon-container">
        {pokemonDetails && pokemonDetails.length > 0 && pokemonDetails.map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        imgUrl={pokemon.sprites.front_default}
                        nrOfMoves={pokemon.moves.length}
                        weight={pokemon.weight}
                        ability={pokemon.abilities[0]?.ability.name}
                    />
            )
        )
        }
        </div>
        </div>
</>
    )
}

export default App
