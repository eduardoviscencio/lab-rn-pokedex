import React, {useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {AppContext} from '../../context/AppContext';

import {PokemonCard} from '../../components';

const MyPokemons = () => {
  const {myPokemons} = useContext(AppContext);

  return (
    <SafeAreaView>
      <FlatList
        data={myPokemons}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PokemonCard
            id={parseInt(item.id)}
            name={item.name}
            image={item.image}
          />
        )}
        keyExtractor={item => `${item.name}-${item.id}`}
      />
    </SafeAreaView>
  );
};

export default MyPokemons;
