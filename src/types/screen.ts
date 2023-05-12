import {RouteProp as RNRouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AttractionDetails: {id: number};
  Gallery: {images: string[]};
  Map: {
    coordinate: {
      latitude: number;
      longitude: number;
    };
    name: string;
  };
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteProp<T extends keyof RootStackParamList> = RNRouteProp<
  RootStackParamList,
  T
>;
