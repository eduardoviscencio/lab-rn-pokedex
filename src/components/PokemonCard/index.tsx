import React, {memo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {StackParamList} from '../../types/Stack.type';

import {POKEMON_DETAIL} from '../../constants/screens';

import {createPokemonId} from '../../helpers/createPokemonId';

import styles from './styles';

type PokemonCardProps = {
  id: number;
  name: string;
};

const PokemonCard = memo(({id, name}: PokemonCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const handleGoToDetail = () => {
    navigation.navigate(POKEMON_DETAIL, {id});
  };

  return (
    <TouchableOpacity onPress={handleGoToDetail}>
      <View>
        <Text>{name}</Text>
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
});

export default PokemonCard;
