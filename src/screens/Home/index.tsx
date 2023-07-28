import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import type {PokemonResult} from '../../types/PokemonResult.type';

import {useAppContext} from '../../hooks/useAppContext';

import {PokemonCard} from '../../components';

const Home = () => {
  const {pokemons} = useAppContext();

  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        renderItem={_ => <PokemonCard />}
        keyExtractor={(item: PokemonResult, index) => `${item.name}-${index}`}
      />
    </SafeAreaView>
  );
};

export default Home;
