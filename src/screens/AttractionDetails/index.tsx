import {faClockFour, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import Moment from 'moment';
import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import Subtitle from '../../components/UI/Typography/Subtitle';
import jsonData from '../../data/attractions.json';
import {useAppNavigation} from '../../hooks/useNavigate';
import {RouteProp} from '../../types/screen';
import styles from './styles';

function AttractionDetails() {
  // Utils
  const route = useRoute<RouteProp<'AttractionDetails'>>();
  const navigation = useAppNavigation();

  const foundItem = useMemo(() => {
    return jsonData.find(item => item.id === route.params?.id);
  }, [route.params]);

  const slicedImages = useMemo(
    () => foundItem?.images.slice(0, 4),
    [foundItem],
  );

  const isOpen = useMemo(() => {
    if (foundItem) {
      const nowDate = Moment();
      const opening = Moment(foundItem.opening_time, 'LT');
      const closing = Moment(foundItem.closing_time, 'LT');

      return nowDate.isSameOrAfter(opening) && nowDate.isSameOrBefore(closing);
    } else {
      return false;
    }
  }, [foundItem]);

  if (!foundItem) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
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
        <Pressable
          onPress={() =>
            navigation.navigate('Gallery', {
              images: foundItem.images,
            })
          }
          style={styles.footer}>
          {slicedImages?.map((image, index) => (
            <View key={image}>
              <Image
                progressiveRenderingEnabled
                source={{uri: image}}
                style={styles.thumbnail}
              />
              {foundItem.images.length - slicedImages.length > 0 &&
              index === slicedImages.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${
                    foundItem.images.length - slicedImages.length
                  }`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>

      <View style={[styles.row, styles.titleContainer]}>
        <Subtitle text={foundItem.name} extraStyles={styles.title} />
        <Subtitle
          text={`${foundItem.entry_price}`}
          extraStyles={styles.title}
        />
      </View>

      {/* Contents */}
      <View style={[styles.contentContainer]}>
        <Subtitle text={foundItem.city} extraStyles={styles.subtitle} />
        <View style={[styles.row, styles.metaWrapper]}>
          <View style={styles.contentIconWrapper}>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </View>
          <Subtitle
            text={foundItem.address}
            extraStyles={styles.iconSubtitle}
          />
        </View>
        <View style={[styles.row, styles.metaWrapper]}>
          <View style={styles.contentIconWrapper}>
            <FontAwesomeIcon icon={faClockFour} />
          </View>
          <View>
            <Subtitle
              text={isOpen ? 'OPEN' : 'CLOSE'}
              extraStyles={[
                styles.iconSubtitle,
                isOpen ? styles.greenText : styles.redText,
              ]}
            />
            <Subtitle
              text={
                isOpen
                  ? `Until ${foundItem.closing_time}`
                  : `Open at ${foundItem.opening_time}`
              }
              extraStyles={styles.iconSubtitle}
            />
          </View>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Number(foundItem.coordinates.lat),
          longitude: Number(foundItem.coordinates.lon),
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        <Marker
          coordinate={{
            latitude: Number(foundItem.coordinates.lat),
            longitude: Number(foundItem.coordinates.lon),
          }}
          title={foundItem.name}
        />
      </MapView>

      <Text
        onPress={() =>
          navigation.navigate('Map', {
            coordinate: {
              latitude: Number(foundItem.coordinates.lat),
              longitude: Number(foundItem.coordinates.lon),
            },
            name: foundItem.name,
          })
        }
        style={styles.mapText}>
        Show full screen map
      </Text>
    </ScrollView>
  );
}

export default React.memo(AttractionDetails);
