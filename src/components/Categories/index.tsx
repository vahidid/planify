import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IProps {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (category: string) => void;
}

function Categories(props: IProps) {
  const {categories, selectedCategory, onCategoryPress} = props;

  return (
    <FlatList
      horizontal
      data={categories}
      style={{marginRight: -32}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => onCategoryPress(item)}>
          <Text
            style={[styles.item, selectedCategory === item && styles.selected]}
            key={index}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

export default React.memo(Categories);
