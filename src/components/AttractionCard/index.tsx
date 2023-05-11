import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
interface IProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

function AttractionCard(props: IProps) {
  const {imageSrc, title, subtitle} = props;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />

      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export default React.memo(AttractionCard);
