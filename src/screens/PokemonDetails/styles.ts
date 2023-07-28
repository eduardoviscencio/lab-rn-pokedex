import {StyleSheet} from 'react-native';

import globalStyles from '../../styles/global';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 0,
  },
  topBanner: {
    height: 250,
    backgroundColor: 'red',
    width: '100%',
    left: 0,
    right: 0,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pokeballImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -100,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 125,
    alignSelf: 'center',
  },
  detailsContainer: {
    marginTop: 60,
  },
});
