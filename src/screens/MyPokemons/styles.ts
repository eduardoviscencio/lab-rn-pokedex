import {StyleSheet} from 'react-native';

import globalStyles from '../../styles/global';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
    gap: 15,
  },
  wrapper: {
    gap: 15,
    justifyContent: 'space-between',
  },
});
