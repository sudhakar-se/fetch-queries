import { Pokemon } from "./component/Pokemon1";
import { useState } from "react";
const a = {
  hi: "j",
  j: "d",
  j: "d",
};

const pokemon = [
  "bulbasaur",
  "pikachu",
  "ditto",
  "bulbasaur",
  "bulbasaur",
  "bulbasaur",
];

export default function App() {
  const [pollingInterval, setPollingInterval] = useState(0);

  return (
    <div className="App">
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        
              <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div>
        {pokemon.map((poke, index) => (
          <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
        ))}
      </div>
    </div>
  );
}
