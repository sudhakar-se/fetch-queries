// src/components/Pokemon.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonByName, selectPokemonByName } from "../service/pokemon";

export const Pokemon = ({ name }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => selectPokemonByName(state, name));
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    if (!pokemon) {
      dispatch(fetchPokemonByName(name));
    }
  }, [name, dispatch, pokemon]);

  if (status === "loading" && !pokemon) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Oh no, there was an error: {error}</>;
  }

  return (
    <>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
        </div>
      )}
    </>
  );
};
