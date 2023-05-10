import {StyleProp, TextStyle} from 'react-native';

export interface TypographyProps {
  text: string;
  extraStyles: StyleProp<TextStyle>;
  bold?: boolean;
}
