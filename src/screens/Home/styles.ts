import {StyleSheet} from 'react-native';

import globalStyles from '../../styles/global';
import {primary} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
    paddingVertical: 0,
  },
  topTile: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  myPokemonsCountContainer: {
    height: 25,
    width: 25,
    backgroundColor: primary,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myPokemonsCountText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  fabText: {
    fontSize: 25,
    color: '#000',
  },
});
