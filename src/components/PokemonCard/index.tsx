import React, {memo, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {getColors} from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {StackParamList} from '../../types/Stack.type';

import {POKEMON_DETAILS} from '../../constants/screens';

import Loader from '../Loader';

import styles from './styles';
import {gray} from '../../styles/theme';

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  isMine?: boolean;
};

const PokemonCard = memo(
  ({id, name, image, isMine = false}: PokemonCardProps) => {
    const [backgroundColor, setBackgroundColor] = useState(gray);
    const [isLoading, setIsLoading] = useState(true);

    const navigation =
      useNavigation<NativeStackNavigationProp<StackParamList>>();

    useEffect(() => {
      const url = image;

      getColors(url, {
        fallback: gray,
        cache: true,
        key: url,
      }).then(colors => setBackgroundColor(colors.background));
    }, [image]);

    const handleGoToDetail = () => {
      if (isMine) return;
      navigation.navigate(POKEMON_DETAILS, {id, color: backgroundColor});
    };

    return (
      <TouchableOpacity onPress={handleGoToDetail}>
        <View style={{...styles.container, backgroundColor: backgroundColor}}>
          {isLoading && <Loader />}
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>#{id}</Text>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
            onLoad={() => setIsLoading(false)}
          />
        </View>
      </TouchableOpacity>
    );
  }
);

export default PokemonCard;
