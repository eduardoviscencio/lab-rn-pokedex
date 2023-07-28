import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {StackParamList} from '../src/types/Stack.type';

import {
  HOME,
  POKEMON_DETAILS,
  ADD_POKEMON,
  MY_POKEMONS,
} from '../src/constants/screens';

import {Home, PokemonDetails, AddPokemon, MyPokemons} from '../src/screens';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={POKEMON_DETAILS}
          component={PokemonDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ADD_POKEMON}
          component={AddPokemon}
          options={{
            title: 'Add Pokemon',
            headerBackVisible: false,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={MY_POKEMONS}
          component={MyPokemons}
          options={{
            title: 'My Pokemons',
            headerBackVisible: false,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
