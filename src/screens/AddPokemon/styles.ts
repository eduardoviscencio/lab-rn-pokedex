import {StyleSheet} from 'react-native';

import globaStyles from '../../styles/global';
import {gray, primary} from '../../styles/theme';

export default StyleSheet.create({
  container: {
    ...globaStyles.container,
  },
  input: {
    backgroundColor: gray,
    borderRadius: 8,
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  form: {
    flex: 1,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
