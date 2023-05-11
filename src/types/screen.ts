import {RouteProp as RNRouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AttractionDetails: {id: number};
  Gallery: {id: number};
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteProp = RNRouteProp<RootStackParamList>;
