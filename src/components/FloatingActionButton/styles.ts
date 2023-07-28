import {StyleSheet} from 'react-native';

import {primary} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
