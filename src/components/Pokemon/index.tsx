import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useAppContext} from '../../hooks';

import {createPokemonId} from '../../helpers/createPokemonId';

const Pokemon = () => {
  const {pokemonDetail, removePokemonDetail} = useAppContext();

  useEffect(() => {
    return () => {
      removePokemonDetail();
    };
  }, [removePokemonDetail]);

  return (
    <View>
      <Text>{pokemonDetail?.name}</Text>
      <Text>{createPokemonId(pokemonDetail?.id ?? 0)}</Text>
    </View>
  );
};

export default Pokemon;
