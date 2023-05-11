import React from 'react';
import {FlatList} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Subtitle from '../../components/UI/Typography/Subtitle';
import Title from '../../components/UI/Typography/Title';
import jsonData from '../../data/attractions.json';
import {Attraction} from '../../models/Attractions';
import styles from './styles';

function Home() {
  const [selectedItem, setSelectedItem] = React.useState('All');
  const [attractions, setAttractions] = React.useState<Attraction[]>([]);

  const handleCategoryPress = (item: string) => {
    setSelectedItem(item);
  };

  React.useEffect(() => {
    setAttractions(jsonData);
  }, []);

  return (
    <>
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

      <FlatList
        contentContainerStyle={styles.row}
        showsVerticalScrollIndicator={false}
        data={attractions}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <AttractionCard
            imageSrc={item.images[0]}
            title={item.name}
            subtitle={item.city}
          />
        )}
      />
    </>
  );
}

export default React.memo(Home);
