import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface IProps {
  text: string;
}

function Title(props: IProps) {
  const {text} = props;

  return <Text style={styles.title}>{text}</Text>;
}

export default React.memo(Title);
