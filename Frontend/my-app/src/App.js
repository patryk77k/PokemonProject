import { Routes, Route } from "react-router-dom";
import AllPokemon from "./components/AllPokemon";
import OnePokemon from "./components/OnePokemon";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/pokemon" element={<AllPokemon pokemon={pokemon} />} />
        <Route path="/pokemon/:id" element={<OnePokemon pokemon={pokemon} />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
