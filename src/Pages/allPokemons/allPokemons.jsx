import { useEffect, useState } from "react";
import axios from "axios";
import "./allPokemons.css";
import { Link } from "react-router-dom";

export default function AllPokemons() {
  const [pokemonsList, setpokemonsList] = useState([]);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    try {
      (async () => {
        const fetchData = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        setpokemonsList(fetchData.data.results);
        setIsReady(!isReady);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main>
      {isReady === false ? (
        <div className="wrapper">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="wrapper">
          {pokemonsList.map((pokemon) => {
            const index = pokemon.url.split("/").at(-2).toString();

            return (
              <Link
                to={`/pokemon/${pokemon.name}/${index}`}
                key={index}
                className="card"
              >
                <p>{pokemon.name}</p>
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                    alt={`image de ${pokemon.name}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
