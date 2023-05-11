import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useAppNavigation} from '../../hooks/useNavigate';

interface IProps {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
}

function AttractionCard(props: IProps) {
  const {imageSrc, title, subtitle, id} = props;

  //Utils
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('AttractionDetails', {
          id,
        });
      }}>
      <Image style={styles.image} source={{uri: imageSrc}} />

      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(AttractionCard);
