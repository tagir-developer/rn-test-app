export enum PageTypes {
  QUOTES = 'Quotes',
  ABOUT = 'About',
}

export type RootStackParamList = {
  [PageTypes.QUOTES]: undefined;
  [PageTypes.ABOUT]: undefined;
};
