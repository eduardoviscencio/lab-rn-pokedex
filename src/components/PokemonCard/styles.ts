import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    width: width / 2 - 20,
    borderRadius: 10,
    position: 'relative',
    height: 100,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -5,
    bottom: -5,
  },
});
