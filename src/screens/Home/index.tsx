import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {PokemonsResult} from '../../types/PokemonsResult.type';
import type {StackParamList} from '../../types/Stack.type';

import {ADD_POKEMON, HOME, MY_POKEMONS} from '../../constants/screens';

import {useAppContext, useFetch} from '../../hooks';

import {
  FloatingActionButton,
  PokemonList,
  ScreenTopTile,
} from '../../components';

import styles from './styles';

type HomeProps = NativeStackScreenProps<StackParamList, typeof HOME>;

const Home = ({navigation}: HomeProps) => {
  const {pokemons, myPokemons, setPokemons} = useAppContext();

  const {loading, data} = useFetch<PokemonsResult>(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  useEffect(() => {
    if (data?.results) {
      setPokemons(data.results);
    }
  }, [data?.results, setPokemons]);

  const handleAddPokemon = () => navigation.navigate(ADD_POKEMON);

  const handleGoToMyPokemons = () => navigation.navigate(MY_POKEMONS);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTopTile action={handleGoToMyPokemons}>
        <View style={styles.topTile}>
          <Text>Go to my Pokemons</Text>
          <View style={styles.myPokemonsCountContainer}>
            <Text style={styles.myPokemonsCountText}>{myPokemons.length}</Text>
          </View>
        </View>
      </ScreenTopTile>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
        <FloatingActionButton action={handleAddPokemon}>
          <Text style={styles.fabText}>+</Text>
        </FloatingActionButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
