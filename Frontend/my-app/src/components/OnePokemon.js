import React from "react";
import { useParams } from "react-router-dom";

const OnePokemon = (onePokemon) => {
  const { id } = useParams();
  console.log(id);
  console.log(onePokemon);

  const findPokemon = onePokemon.find(
    (singlePokemon) => singlePokemon.id === id
  );
  console.log(findPokemon);
  return (
    <div>
      <p>{findPokemon.name.english}</p>
    </div>
  );
};

export default OnePokemon;
