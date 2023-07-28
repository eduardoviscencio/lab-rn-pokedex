export const createPokemonId = (id: number) => {
  return id.toString().padStart(3, '0');
};
