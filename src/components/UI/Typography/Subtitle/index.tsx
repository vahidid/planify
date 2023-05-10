import React from 'react';
import {Text} from 'react-native';
import {TypographyProps} from '../interfaces';
import styles from './styles';

function Subtitle(props: TypographyProps) {
  const {text, extraStyles, bold} = props;
  return (
    <Text style={[styles.subtitle, extraStyles, ...[bold && styles.bold]]}>
      {text}
    </Text>
  );
}

export default Subtitle;
