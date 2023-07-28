import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useReducer,
} from 'react';

import type {PokemonResult} from '../types/PokemonsResult.type';

type AppState = {
  pokemons: PokemonResult[];
  setPokemons: (pokemons: PokemonResult[]) => void;
};

type ACTION_TYPE = {
  type: 'SET_POKEMONS';
  payload: PokemonResult[];
};

type AppProviderProps = PropsWithChildren<{}>;

const initialState: AppState = {
  pokemons: [],
  setPokemons: () => {},
};

const reducer = (state: AppState, action: ACTION_TYPE): AppState => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
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

  return (
    <AppContext.Provider
      value={{
        pokemons: state.pokemons,
        setPokemons,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
