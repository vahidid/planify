import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Pressable, SafeAreaView, View} from 'react-native';
import {useAppNavigation} from '../../hooks/useNavigate';
import {RouteProp} from '../../types/screen';
import styles from './styles';

function Gallery() {
  const route = useRoute<RouteProp<'Gallery'>>();
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <View style={styles.backContainer}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={23}>
          <FontAwesomeIcon icon={faChevronLeft} size={23} />
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        keyExtractor={item => item}
        data={route.params.images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
    </SafeAreaView>
  );
}

export default React.memo(Gallery);
