import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link to={"/"}>
          <img
            src="https://imgur.com/1jBybmE.png"
            alt="Logo Pokemon"
            className="logo"
          />
        </Link>
        <div>
          <Link to="/allPokemons">Pokemons</Link>
          <Link to="/allTypes">Types</Link>
        </div>
      </div>
    </header>
  );
}
