import {
  ADD_POKEMON,
  HOME,
  POKEMON_DETAILS,
  MY_POKEMONS,
} from '../constants/screens';

export type StackParamList = {
  [HOME]: undefined;
  [POKEMON_DETAILS]: {id: string; color: string; isMine: boolean};
  [ADD_POKEMON]: undefined;
  [MY_POKEMONS]: undefined;
};
