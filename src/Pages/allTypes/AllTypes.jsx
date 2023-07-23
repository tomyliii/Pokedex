import { useEffect, useState } from "react";
import "./allTypes.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllTypes() {
  const [listTypes, setListTypes] = useState([]);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    try {
      (async () => {
        const fetchData = await axios.get("https://pokeapi.co/api/v2/type");
        setIsReady(!isReady);
        setListTypes(fetchData.data.results);
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
          {listTypes.map((Type) => {
            return (
              <Link key={Type.name} to={`/Type/${Type.name}`} className="card">
                {Type.name}
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
