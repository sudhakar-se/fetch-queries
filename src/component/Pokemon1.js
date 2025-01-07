import { useEffect, useState } from "react";
import { fetchPokemon } from "../service/pokemon";
import { useQuery ,useQueryClient} from '@tanstack/react-query';


export const Pokemon = ({ name,pollingInterval }) => {
  const queryClient = useQueryClient();


  const { data, isLoading, isError } = useQuery({
    queryKey: [name],
    queryFn: () => fetchPokemon(name),
    //usefull props
    refetchOnWindowFocus: true,
    refetchInterval:pollingInterval
  });

 const handleRevalidate=()=>{
  queryClient.invalidateQueries({ queryKey: [name] })
 }

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
          <button onClick={handleRevalidate}>Revalidate {data?.species?.name} </button>
        </>
      )}
    </>
  );
};
