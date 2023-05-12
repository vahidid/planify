import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Subtitle from '../../components/UI/Typography/Subtitle';
import {useAppNavigation} from '../../hooks/useNavigate';
import {RouteProp} from '../../types/screen';
import styles from './styles';

function Map() {
  const route = useRoute<RouteProp<'Map'>>();
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
        <Subtitle text={route.params.name} extraStyles={styles.title} />
      </View>

      <MapView
        initialRegion={{
          latitude: route.params.coordinate.latitude,
          longitude: route.params.coordinate.longitude,
          longitudeDelta: 0.009,
          latitudeDelta: 0.009,
        }}
        style={styles.map}>
        <Marker
          tracksViewChanges={false}
          coordinate={{
            latitude: route.params.coordinate.latitude,
            longitude: route.params.coordinate.longitude,
          }}
          title={route.params.name}
        />
      </MapView>
    </View>
  );
}

export default React.memo(Map);
