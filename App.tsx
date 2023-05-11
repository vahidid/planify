import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.flex, styles.bgWhite, styles.container]}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgWhite: {
    backgroundColor: '#fff',
    color: '#000',
  },
  container: {
    padding: 20,
    paddingBottom: 0,
  },
});

export default App;
