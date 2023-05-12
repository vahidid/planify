import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },

  header: {
    position: 'absolute',
    top: 20,
    zIndex: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    width: width - 48,
    marginHorizontal: 25,
    padding: 15,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
  },
});
