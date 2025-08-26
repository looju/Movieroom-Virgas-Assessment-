export type RootStackParamList = {
   Movie:{
       id:string
 },
 Search:{
    query:string
 },
 
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Watchlist:undefined
};
