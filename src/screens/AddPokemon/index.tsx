import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {StackParamList} from '../../types/Stack.type';

import {ADD_POKEMON} from '../../constants/screens';

import {AppContext} from '../../context/AppContext';

import styles from './styles';

const initialValues = {
  id: '',
  name: '',
  image: '',
  type: '',
  abilities: '',
};

type AddPokemonProps = NativeStackScreenProps<
  StackParamList,
  typeof ADD_POKEMON
>;

const AddPokemon = ({navigation}: AddPokemonProps) => {
  const {myPokemons, addPokemon} = useContext(AppContext);

  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState<string | null>(null);

  const handleOnChange = (field: string, value: string) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleOnSubmit = () => {
    setFormError('');

    const {id, name, image, type, abilities} = formValues;

    if (myPokemons.find(item => item.id === id)) {
      setFormError('The id is already in use');

      return;
    }

    if (!id || !name || !image || !type || !abilities) {
      setFormError('All fields are required');
      return;
    }

    addPokemon({
      id,
      name,
      image,
      type,
      abilities: abilities
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== ''),
    });

    setFormValues(initialValues);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoComplete="off"
            autoCorrect={false}
            inputMode="numeric"
            keyboardType="numeric"
            maxLength={3}
            placeholder="Id"
            onChangeText={text => handleOnChange('id', text)}
          />
          <TextInput
            style={styles.input}
            autoComplete="off"
            autoCorrect={false}
            placeholder="Name"
            onChangeText={text => handleOnChange('name', text)}
          />
          <TextInput
            style={styles.input}
            autoComplete="off"
            autoCorrect={false}
            inputMode="url"
            placeholder="Image"
            onChangeText={text => handleOnChange('image', text)}
          />
          <TextInput
            style={styles.input}
            autoComplete="off"
            autoCorrect={false}
            placeholder="Type"
            onChangeText={text => handleOnChange('type', text)}
          />
          <TextInput
            style={styles.input}
            autoComplete="off"
            autoCorrect={false}
            placeholder="Abilities"
            onChangeText={text => handleOnChange('abilities', text)}
          />
          {formError && <Text style={styles.error}>{`${formError}`}</Text>}
        </View>
        <TouchableOpacity onPress={handleOnSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPokemon;
