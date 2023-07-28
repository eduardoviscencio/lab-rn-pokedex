import {ADD_POKEMON, HOME, POKEMON_DETAIL} from '../constants/screens';

export type StackParamList = {
  [HOME]: undefined;
  [POKEMON_DETAIL]: {id: number};
  [ADD_POKEMON]: undefined;
};
