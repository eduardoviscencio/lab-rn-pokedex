import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import type {PokemonsResult} from '../../types/PokemonsResult.type';

import {useAppContext, useFetch} from '../../hooks';

import {FloatingActionButton, PokemonList} from '../../components';

import styles from './styles';

const Home = () => {
  const {pokemons, setPokemons} = useAppContext();

  const {loading, data} = useFetch<PokemonsResult>(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  useEffect(() => {
    if (data?.results) {
      setPokemons(data.results);
    }
  }, [data?.results, setPokemons]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
        <FloatingActionButton action={() => {}}>
          <Text style={styles.fabText}>+</Text>
        </FloatingActionButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
