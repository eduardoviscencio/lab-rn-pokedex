import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

type PokemonResult = {
  name: string;
  url: string;
};

type AppState = {
  pokemons: PokemonResult[];
};

type AppProviderProps = PropsWithChildren<{}>;

const initialState: AppState = {
  pokemons: [],
};

// TODO: Add action types
const reducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AppContext = createContext<AppState>(initialState);

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        pokemons: state.pokemons,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
