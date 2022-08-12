import { RouteProp } from '@react-navigation/native';
import NavigationProp from '../../../types/NavigationTypes';

export interface DetailScreenProps {
  navigation: NavigationProp;
  route: RouteProp<{ params: { type: string } }, 'params'>;
}
