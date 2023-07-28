import React, {useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {AppContext} from '../../context/AppContext';

import {PokemonCard} from '../../components';

import styles from './styles';

const MyPokemons = () => {
  const {myPokemons} = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={myPokemons}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.wrapper}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <PokemonCard
            id={parseInt(item.id)}
            name={item.name}
            image={item.image}
            isMine={true}
          />
        )}
        keyExtractor={item => `${item.name}-${item.id}`}
      />
    </SafeAreaView>
  );
};

export default MyPokemons;
