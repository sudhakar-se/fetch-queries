import { useEffect, useState } from "react";
import { fetchPokemon } from "../service/pokemon";
import { useQuery } from "@tanstack/react-query";

export const Pokemon = ({ name,pollingInterval }) => {
  // const [data, setData] = useState({});
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true); // Initially, set loading to true
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon",name],
    queryFn: () => fetchPokemon(name),
    refetchOnWindowFocus: false,
    refetchInterval:pollingInterval
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true); // Set loading to true when starting fetching data
  //     try {
  //       const pokemonData = await fetchPokemon(name);
  //       // Handle successful data fetching here
  //       console.log('Pokemon data:', pokemonData);
  //       setData(pokemonData);
  //     } catch (error) {
  //       // Handle errors here
  //       console.error('Error fetching Pokemon:', error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false); // Set loading to false after data fetching is done
  //     }
  //   };

  //   fetchData();

  //   // Cleanup function (optional)
  //   return () => {
  //     // Any cleanup code can go here
  //   };
  // }, [name]); // Add 'name' to dependency array to refetch data when 'name' changes

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
