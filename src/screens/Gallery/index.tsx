import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

function Gallery() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
      </View>
    </ScrollView>
  );
}

export default React.memo(Gallery);
