import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';

import type {PokemonList, PokemonResult} from '../../types/PokemonList.type';

import {useAppContext, useFetch} from '../../hooks';

import {PokemonCard} from '../../components';

const Home = () => {
  const {pokemons, setPokemons} = useAppContext();

  const {loading, data} = useFetch<PokemonList>(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  useEffect(() => {
    if (data?.results) {
      setPokemons(data.results);
    }
  }, [data?.results, setPokemons]);

  return (
    <SafeAreaView>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={pokemons}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          keyExtractor={(item: PokemonResult, index) => `${item.name}-${index}`}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
