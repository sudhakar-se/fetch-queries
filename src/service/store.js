// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
