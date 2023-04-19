import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  PageTypes,
  RootStackParamList,
} from '../../navigation/RootNavigator/types';

export type TypeHomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  PageTypes.QUOTES
>;
