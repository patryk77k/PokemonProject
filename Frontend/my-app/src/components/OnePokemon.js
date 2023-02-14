import React from "react";
import { useParams } from "react-router-dom";

const OnePokemon = ({ pokemon }) => {
  const { id } = useParams();
  console.log(id);
  console.log(pokemon);
  const showPokemon =
    pokemon.length && pokemon.find((singlePokemon) => singlePokemon.id === id);
  console.log("showPokemon", showPokemon);
  return (
    <div>
      <p>{showPokemon.name?.english}</p>
      <p>{showPokemon.name?.japanese}</p>
      <p>{showPokemon.base?.Attack}</p>
    </div>
  );
};

export default OnePokemon;
