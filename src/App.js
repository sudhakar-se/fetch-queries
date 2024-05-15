import  {Pokemon} from './component/Pokemon1'
import { useState } from 'react'
import { fetchPokemon } from './service/pokemon';
import { useQuery } from '@tanstack/react-query';

const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']
// const pokemon = [ 'pikachu','ditto']

export default function App() {
  const [pollingInterval, setPollingInterval] = useState(0)
  console.log("🚀 ~ App ~ pollingInterval:", pollingInterval)

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
  )
}
