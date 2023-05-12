import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 28,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  image: {
    flex: 1,
    justifyContent: 'space-between',
    height: height / 2 - 10,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  thumbnail: {
    height: 50,
    width: 50,
    margin: 8,
    borderRadius: 10,
  },
  moreImages: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    top: 8,
    left: 8,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  subtitle: {
    fontSize: 18,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  metaWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  contentIconWrapper: {
    backgroundColor: '#e2e2e2',
    color: '#000',
    padding: 15,
    borderRadius: 999,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  iconSubtitle: {
    fontSize: 12,
    marginRight: 20,
  },
  greenText: {
    color: 'green',
  },
  redText: {
    color: 'red',
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 40,
    borderRadius: 15,
  },
});
