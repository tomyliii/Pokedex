import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AllPokemons from "./Pages/allPokemons/allPokemons";
import Pokemon from "./Pages/pokemon/Pokemon";
import AllTypes from "./Pages/allTypes/AllTypes";
import Header from "./Components/Header/Header";
import Type from "./Pages/type/Type";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="allPokemons/" element={<AllPokemons />} />
          <Route path="pokemon/:name/:index" element={<Pokemon />} />
          <Route path="allTypes/" element={<AllTypes />} />
          <Route path="Type/:type" element={<Type />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
