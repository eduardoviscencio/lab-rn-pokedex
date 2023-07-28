import {
  ADD_POKEMON,
  HOME,
  POKEMON_DETAILS,
  MY_POKEMONS,
} from '../constants/screens';

export type StackParamList = {
  [HOME]: undefined;
  [POKEMON_DETAILS]: {id: number; color: string};
  [ADD_POKEMON]: undefined;
  [MY_POKEMONS]: undefined;
};
