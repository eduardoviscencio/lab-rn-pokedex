import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type {PokemonResult} from '../../types/PokemonsResult.type';

import {createPokemonId} from '../../helpers/createPokemonId';

import styles from './styles';

type PokemonCardProps = {
  id: number;
  pokemon: PokemonResult;
};

const PokemonCard = ({id, pokemon}: PokemonCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TouchableOpacity>
      <View>
        <Text>{pokemon.name}</Text>
        <Text>{createPokemonId(id)}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && <ActivityIndicator />}
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
