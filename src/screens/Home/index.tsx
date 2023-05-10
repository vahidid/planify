import React from 'react';
import {View} from 'react-native';
import Categories from '../../components/Categories';
import Subtitle from '../../components/UI/Typography/Subtitle';
import Title from '../../components/UI/Typography/Title';
import styles from './styles';

function Home() {
  const [selectedItem, setSelectedItem] = React.useState('All');

  const handleCategoryPress = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <Title text="Where do" />
      <Title text="you want to go?" bold />

      <Subtitle
        text="Explore Attractions"
        extraStyles={[styles.subtitle]}
        bold
      />

      <Categories
        selectedCategory={selectedItem}
        categories={[
          'All',
          'Popular',
          'Historical',
          'Random',
          'Trending',
          'Exclusive',
          'Others',
        ]}
        onCategoryPress={handleCategoryPress}
      />
    </View>
  );
}

export default React.memo(Home);
