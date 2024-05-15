import { useEffect, useState } from "react";
import { fetchPokemon } from "../service/pokemon";
import { useQuery } from "@tanstack/react-query";

export const Pokemon = ({ name,pollingInterval }) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon",name],
    queryFn: () => fetchPokemon(name),
    refetchOnWindowFocus: false,
    refetchInterval:pollingInterval
  });
 

  return (
    <>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <h3>
            {data?.species?.name} {isLoading ? "..." : ""}
          </h3>
          <img src={data.sprites?.front_shiny} alt={data.species?.name} />
        </>
      )}
    </>
  );
};
