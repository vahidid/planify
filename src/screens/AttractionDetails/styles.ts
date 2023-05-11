import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {margin: 28},
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  image: {
    flex: 1,
    justifyContent: 'flex-start',
    minHeight: height / 2 - 50,
    padding: 20,
  },
  roundImage: {
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 15,
    borderRadius: 999,
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  titleContainer: {
    marginTop: 24,
    paddingHorizontal: 5,
  },
});
