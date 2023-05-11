import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {margin: 32},
  subtitle: {
    marginTop: 40,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  emptyText: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: 24,
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
});
