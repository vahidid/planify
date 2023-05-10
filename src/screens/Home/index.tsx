import React from 'react';
import {View} from 'react-native';
import Subtitle from '../../components/UI/Typography/Subtitle';
import Title from '../../components/UI/Typography/Title';
import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Title text="Where do" />
      <Title text="you want to go?" bold />

      <Subtitle
        text="Explore Attractions"
        extraStyles={[styles.subtitle]}
        bold
      />
    </View>
  );
}

export default React.memo(Home);
