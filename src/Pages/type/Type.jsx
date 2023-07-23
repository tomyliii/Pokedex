import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./type.css";

export default function Type() {
  const [listType, setListType] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const { type } = useParams();
  useEffect(() => {
    try {
      (async () => {
        const fetchData = await axios.get(
          "https://pokeapi.co/api/v2/type/" + type
        );
        setIsReady(!isReady);
        setListType(fetchData.data.pokemon);
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
          {listType.map((pokemon) => {
            const index = pokemon.pokemon.url.split("/").at(-2).toString();
            return (
              <Link
                to={`/pokemon/${pokemon.pokemon.name}/${index}`}
                key={index}
                className="card"
              >
                <p>{pokemon.pokemon.name}</p>
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                    alt={`image de ${pokemon.pokemon.name}`}
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
