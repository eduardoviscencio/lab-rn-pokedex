import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useAppContext} from '../../hooks';

import styles from './styles';
import {gray} from '../../styles/theme';

type BadgeProps = {
  value?: string;
  foregroundColor?: string;
  color?: string;
};

const Badge = ({
  value = '',
  foregroundColor = '#000',
  color = gray,
}: BadgeProps) => {
  return (
    <View
      style={{
        ...styles.badgeContainer,
        backgroundColor: color,
      }}>
      <Text style={{...styles.badgeContent, color: foregroundColor}}>
        {value}
      </Text>
    </View>
  );
};

type PokemonProps = {
  color: string;
};

const Pokemon = ({color}: PokemonProps) => {
  const {pokemonDetail, removePokemonDetail} = useAppContext();

  useEffect(() => {
    return () => {
      removePokemonDetail();
    };
  }, [removePokemonDetail]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pokemonDetail?.name}</Text>
      <Text style={styles.id}>#{pokemonDetail?.id}</Text>
      <Badge color={color} value={pokemonDetail?.type} />
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsHeading}>Skills</Text>
        {pokemonDetail?.abilities.map(ability => {
          return <Badge key={ability} value={ability} />;
        })}
      </View>
    </View>
  );
};

export default Pokemon;
