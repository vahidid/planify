import {Dimensions, StyleSheet} from 'react-native';

const screen = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 15,
    marginBottom: 20,
  },
  image: {
    borderRadius: 10,
    width: (screen.width - 110) / 2,
    height: 120,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: 12,
    marginHorizontal: 10,
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 11,
    color: 'rgba(0,0,0,0.5)',
    marginLeft: 3,
  },
  icon: {
    width: 16,
    height: 16,
  },
  subtitleContainer: {
    marginTop: 4,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
