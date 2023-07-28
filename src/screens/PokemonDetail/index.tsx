import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {PokemonData} from '../../types/PokemonData.type';
import type {StackParamList} from '../../types/Stack.type';

import {POKEMON_DETAIL} from '../../constants/screens';

import {Pokemon} from '../../components';

import {useAppContext, useFetch} from '../../hooks';

import styles from './styles';

type PokemonDetailProps = NativeStackScreenProps<
  StackParamList,
  typeof POKEMON_DETAIL
>;

const PokemonDetail = ({route}: PokemonDetailProps) => {
  const {id} = route.params;

  const {setPokemonDetail} = useAppContext();

  const {loading, data} = useFetch<PokemonData>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  useEffect(() => {
    if (data) {
      setPokemonDetail(data);
    }
  }, [data, setPokemonDetail]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ? <ActivityIndicator /> : <Pokemon />}
      </View>
    </SafeAreaView>
  );
};

export default PokemonDetail;
