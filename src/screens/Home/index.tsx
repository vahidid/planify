import React from 'react';
import {View} from 'react-native';
import Title from '../../components/Title';

function Home() {
  return (
    <View>
      <Title text="Hello from props" />
    </View>
  );
}

export default React.memo(Home);
