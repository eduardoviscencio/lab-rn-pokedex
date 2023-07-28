import React from 'react';
import {FlatList} from 'react-native';

import type {PokemonResult} from '../../types/PokemonsResult.type';

import PokemonCard from '../PokemonCard';

import styles from './styles';

type PokemonListProps = {
  pokemons: PokemonResult[];
};

const PokemonList = ({pokemons}: PokemonListProps) => {
  return (
    <FlatList
      data={pokemons}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={styles.wrapper}
      contentContainerStyle={styles.container}
      renderItem={({item, index}) => {
        const id = index + 1;

        return (
          <PokemonCard
            id={id}
            name={item.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        );
      }}
      keyExtractor={(item, index) => `${item.name}-${index}`}
    />
  );
};

export default PokemonList;
