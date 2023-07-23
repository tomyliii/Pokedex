import { useEffect, useState } from "react";
import axios from "axios";
import "./pokemon.css";
import { Link, useParams } from "react-router-dom";

export default function Pokemon() {
  const [infos, setInfos] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const { name, index } = useParams();
  useEffect(() => {
    try {
      (async () => {
        const fetchData = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        setInfos(fetchData.data.types);
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
          <div className="card">
            <p>{name}</p>
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                alt={`image de ${name}`}
              />
            </div>
          </div>
          <div className="Link-To-Type">
            {infos.map((Type) => {
              return (
                <Link
                  key={Type.type.name}
                  to={`/Type/${Type.type.name}`}
                  className="card"
                >
                  {Type.type.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
