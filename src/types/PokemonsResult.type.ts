export type PokemonsResult = {
  count: number;
  next: string;
  previous: null;
  results: PokemonResult[];
};

export type PokemonResult = {
  name: string;
  url: string;
};
