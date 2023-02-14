import React from "react";
import logo from "../photo/logo.jpeg";
import { NavLink } from "react-router-dom";

const AllPokemon = ({ pokemon }) => {
  return (
    <div className="container-allpokemon">
      {pokemon.length
        ? pokemon.map((showSinglePokemon) => (
            <div className="items">
              <img src={logo} alt="logo" />
              <div>{showSinglePokemon.name.english}</div>
              <button class="button-59" role="button">
                SELECT TO FIGHT!
              </button>
              <NavLink>
                <button class="button-59" role="button">
                  Details
                </button>
              </NavLink>
            </div>
          ))
        : "...loading"}
    </div>
  );
};

export default AllPokemon;
