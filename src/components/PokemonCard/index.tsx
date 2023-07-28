import React from 'react';
import {View, Text} from 'react-native';

import type {PokemonResult} from '../../types/PokemonList.type';

type PokemonCardProps = {
  pokemon: PokemonResult;
};

const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonCard;
