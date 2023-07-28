import React from 'react';
import {View, Text, Image} from 'react-native';

import type {PokemonResult} from '../../types/PokemonsResult.type';

import styles from './styles';

type PokemonCardProps = {
  id: number;
  pokemon: PokemonResult;
};

const PokemonCard = ({id, pokemon}: PokemonCardProps) => {
  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Text>{id.toString().padStart(3, '0')}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        }}
      />
    </View>
  );
};

export default PokemonCard;
