import React, {useEffect} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {PokemonData} from '../../types/PokemonData.type';
import type {PokemonDetail} from '../../types/NewPokemon.type';
import type {StackParamList} from '../../types/Stack.type';

import {POKEMON_DETAILS} from '../../constants/screens';

import {Loader, Pokemon} from '../../components';

import {useAppContext, useFetch} from '../../hooks';

import styles from './styles';

type PokemonDetailProps = NativeStackScreenProps<
  StackParamList,
  typeof POKEMON_DETAILS
>;

const PokemonDetails = ({route}: PokemonDetailProps) => {
  const {id, color} = route.params;

  const {setPokemonDetail} = useAppContext();

  const {loading, data} = useFetch<PokemonData>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  useEffect(() => {
    if (data) {
      const details: PokemonDetail = {
        id: data.id.toString(),
        name: data.name,
        type: data.types[0].type.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        abilities: data.abilities.map(ability => ability.ability.name),
      };

      setPokemonDetail(details);
    }
  }, [data, setPokemonDetail]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{...styles.topBanner, backgroundColor: color}}>
          <Image
            style={styles.pokeballImage}
            source={require('./../../../assets/pokebola-blanca.png')}
          />
        </View>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
        {loading ? (
          <Loader />
        ) : (
          <View style={styles.detailsContainer}>
            <Pokemon color={color} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PokemonDetails;
