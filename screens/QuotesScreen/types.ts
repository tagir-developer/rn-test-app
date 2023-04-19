import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageTypes, RootStackParamList } from '../../common/types';

export type TypeHomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  PageTypes.QUOTES
>;
