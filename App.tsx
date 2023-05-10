import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.flex]}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgRed: {
    backgroundColor: 'red',
  },
});

export default App;
