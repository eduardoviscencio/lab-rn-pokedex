import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useReducer,
} from 'react';

import type {PokemonData} from '../types/PokemonData.type';
import type {PokemonResult} from '../types/PokemonsResult.type';

type AppState = {
  pokemons: PokemonResult[];
  pokemonDetail: PokemonData | null;
  setPokemons: (pokemons: PokemonResult[]) => void;
  setPokemonDetail: (pokemon: PokemonData) => void;
  removePokemonDetail: () => void;
};

type ACTION_TYPE =
  | {
      type: 'SET_POKEMONS';
      payload: PokemonResult[];
    }
  | {
      type: 'SET_POKEMON_DETAIL';
      payload: PokemonData;
    }
  | {
      type: 'REMOVE_POKEMON_DETAIL';
    };

type AppProviderProps = PropsWithChildren<{}>;

const initialState: AppState = {
  pokemons: [],
  pokemonDetail: null,
  setPokemons: () => {},
  setPokemonDetail: () => {},
  removePokemonDetail: () => {},
};

const reducer = (state: AppState, action: ACTION_TYPE): AppState => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'SET_POKEMON_DETAIL':
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case 'REMOVE_POKEMON_DETAIL':
      return {
        ...state,
        pokemonDetail: null,
      };
    default:
      return state;
  }
};

export const AppContext = createContext<AppState>(initialState);

const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPokemons = useCallback((pokemons: PokemonResult[]) => {
    dispatch({type: 'SET_POKEMONS', payload: pokemons});
  }, []);

  const setPokemonDetail = useCallback((pokemon: PokemonData) => {
    dispatch({type: 'SET_POKEMON_DETAIL', payload: pokemon});
  }, []);

  const removePokemonDetail = useCallback(() => {
    dispatch({type: 'REMOVE_POKEMON_DETAIL'});
  }, []);

  return (
    <AppContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemonDetail: state.pokemonDetail,
        setPokemons,
        setPokemonDetail,
        removePokemonDetail,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
