import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

import type {PokemonsResult} from '../../types/PokemonsResult.type';

import {useAppContext, useFetch} from '../../hooks';

import PokemonList from '../../components/PokemonList';

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
    <SafeAreaView>
      {loading ? <Text>Loading...</Text> : <PokemonList pokemons={pokemons} />}
    </SafeAreaView>
  );
};

export default Home;
