import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    gap: 10,
    paddingVertical: 10,
  },
  badgeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  badgeContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  skillsHeading: {
    textAlign: 'left',
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
