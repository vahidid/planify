import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import styles from './styles';

interface IProps {
  text: string;
  bold?: boolean;
  extraStyles?: StyleProp<TextStyle>;
}

function Title(props: IProps) {
  const {text, bold, extraStyles} = props;

  return (
    <Text style={[styles.title, extraStyles, ...[bold && styles.bold]]}>
      {text}
    </Text>
  );
}

export default React.memo(Title);
