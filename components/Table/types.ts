import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageTypes, RootStackParamList } from '../../common/types';

export type TypeHomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  PageTypes.QUOTES
>;

export type TypeTableColumn<T> = {
  title: string;
  fieldName: keyof T;
  render?: (item: T) => JSX.Element;
  width?: string | number;
};
