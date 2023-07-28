import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useReducer,
} from 'react';

import type {PokemonResult} from '../types/PokemonsResult.type';
import type {PokemonDetail} from '../types/NewPokemon.type';

type AppState = {
  pokemons: PokemonResult[];
  myPokemons: PokemonDetail[];
  pokemonDetail: PokemonDetail | null;
  setPokemons: (pokemons: PokemonResult[]) => void;
  setPokemonDetail: (pokemon: PokemonDetail) => void;
  removePokemonDetail: () => void;
  addPokemon: (pokemon: PokemonDetail) => void;
};

type ACTION_TYPE =
  | {
      type: 'SET_POKEMONS';
      payload: PokemonResult[];
    }
  | {
      type: 'SET_POKEMON_DETAIL';
      payload: PokemonDetail;
    }
  | {
      type: 'REMOVE_POKEMON_DETAIL';
    }
  | {
      type: 'ADD_POKEMON';
      payload: PokemonDetail;
    };

type AppProviderProps = PropsWithChildren<{}>;

const initialState: AppState = {
  pokemons: [],
  myPokemons: [],
  pokemonDetail: null,
  setPokemons: () => {},
  setPokemonDetail: () => {},
  removePokemonDetail: () => {},
  addPokemon: () => {},
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
    case 'ADD_POKEMON':
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload],
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

  const setPokemonDetail = useCallback((pokemon: PokemonDetail) => {
    dispatch({type: 'SET_POKEMON_DETAIL', payload: pokemon});
  }, []);

  const removePokemonDetail = useCallback(() => {
    dispatch({type: 'REMOVE_POKEMON_DETAIL'});
  }, []);

  const addPokemon = useCallback(
    (pokemon: PokemonDetail) => {
      if (state.myPokemons.find(item => item.id === pokemon.id)) {
        return;
      }

      dispatch({type: 'ADD_POKEMON', payload: pokemon});
    },
    [state.myPokemons]
  );

  return (
    <AppContext.Provider
      value={{
        pokemons: state.pokemons,
        myPokemons: state.myPokemons,
        pokemonDetail: state.pokemonDetail,
        setPokemons,
        setPokemonDetail,
        removePokemonDetail,
        addPokemon,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
