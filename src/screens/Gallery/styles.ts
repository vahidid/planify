import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  backContainer: {
    position: 'absolute',
    top: 42,
    left: 42,
    zIndex: 9999,
    backgroundColor: '#fff',
    borderRadius: 9999,
    padding: 12,
  },
  image: {
    height: height / 2 - 80,
    padding: 20,
    marginBottom: 20,
    borderRadius: 25,
  },
});
