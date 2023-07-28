import React from 'react';
import {FlatList} from 'react-native';

import type {PokemonResult} from '../../types/PokemonsResult.type';

import PokemonCard from '../PokemonCard';

type PokemonListProps = {
  pokemons: PokemonResult[];
};

const PokemonList = ({pokemons}: PokemonListProps) => {
  return (
    <FlatList
      data={pokemons}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <PokemonCard id={index + 1} name={item.name} />
      )}
      keyExtractor={(item: PokemonResult, index) => `${item.name}-${index}`}
    />
  );
};

export default PokemonList;
