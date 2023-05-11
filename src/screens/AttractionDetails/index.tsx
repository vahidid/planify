import React, {useMemo} from 'react';
import {useAppRoute} from '../../hooks/useRoute';
import jsonData from '../../data/attractions.json';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  View,
} from 'react-native';
import styles from './styles';
import Subtitle from '../../components/UI/Typography/Subtitle';
import {useAppNavigation} from '../../hooks/useNavigate';

function AttractionDetails() {
  // Utils
  const route = useAppRoute();
  const navigation = useAppNavigation();

  const foundItem = useMemo(() => {
    return jsonData.find(item => item.id === route.params?.id);
  }, [route.params]);

  if (!foundItem) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ImageBackground
          source={{uri: foundItem.images[0]}}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.roundImage}>
          <View style={styles.row}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/back.png')}
              />
            </Pressable>
            <Pressable style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/share.png')}
              />
            </Pressable>
          </View>
        </ImageBackground>

        <View style={[styles.row, styles.titleContainer]}>
          <Subtitle text={foundItem.name} extraStyles={styles.title} />
          <Subtitle
            text={`${foundItem.entry_price}`}
            extraStyles={styles.title}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default React.memo(AttractionDetails);
