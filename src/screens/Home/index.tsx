import React from 'react';
import {View} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
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
      <View style={styles.row}>
        <AttractionCard
          imageSrc="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg"
          title="Vahid Hasani"
          subtitle="Rome"
        />
        <AttractionCard
          imageSrc="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg"
          title="Vahid Hasani"
          subtitle="Rome"
        />
      </View>
      <View style={styles.row}>
        <AttractionCard
          imageSrc="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg"
          title="Vahid Hasani"
          subtitle="Rome"
        />
        <AttractionCard
          imageSrc="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg"
          title="Vahid Hasani"
          subtitle="Rome"
        />
      </View>
    </View>
  );
}

export default React.memo(Home);
