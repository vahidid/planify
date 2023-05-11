import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Subtitle from '../../components/UI/Typography/Subtitle';
import Title from '../../components/UI/Typography/Title';
import jsonData from '../../data/attractions.json';
import categoriesData from '../../data/categories.json';
import {Attraction} from '../../models/Attractions';
import styles from './styles';

const ALL = 'All';

function Home() {
  // State
  const [selectedItem, setSelectedItem] = React.useState(ALL);
  const [attractions, setAttractions] = React.useState<Attraction[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);

  const handleCategoryPress = (item: string) => {
    setSelectedItem(item);
  };

  React.useEffect(() => {
    setAttractions(jsonData);
    setCategories(categoriesData);
    console.log('Home is ran');
  }, []);

  useEffect(() => {
    if (selectedItem === ALL) {
      setAttractions(jsonData);
    } else {
      setAttractions(
        jsonData.filter(item => item.categories.includes(selectedItem)),
      );
    }
  }, [selectedItem]);

  return (
    <SafeAreaView style={[styles.container]}>
      <Title text="Where do" />
      <Title text="you want to go?" bold />

      <Subtitle
        text="Explore Attractions"
        extraStyles={[styles.subtitle]}
        bold
      />

      <Categories
        selectedCategory={selectedItem}
        categories={[ALL, ...categories]}
        onCategoryPress={handleCategoryPress}
      />

      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found.</Text>
        }
        contentContainerStyle={styles.row}
        showsVerticalScrollIndicator={false}
        data={attractions}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <AttractionCard
            imageSrc={item.images[0]}
            title={item.name}
            subtitle={item.city}
            id={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Home;
