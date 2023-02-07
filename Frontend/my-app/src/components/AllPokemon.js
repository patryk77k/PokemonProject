import React from "react";
import { useState, useEffect } from "react";

const AllPokemon = (onePokemon) => {
  const [pokemon, setPokemon] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>
        {pokemon.length
          ? pokemon.map((onePokemon) => <div>{onePokemon.name.english}</div>)
          : "...loading"}
      </p>
    </div>
  );
};

export default AllPokemon;
