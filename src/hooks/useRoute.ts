import {useRoute} from '@react-navigation/native';
import {RouteProp} from '../types/screen';

export const useAppRoute = useRoute<RouteProp>;
