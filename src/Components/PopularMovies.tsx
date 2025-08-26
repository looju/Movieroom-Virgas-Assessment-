
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SequencedTransition,
  SlideInUp,
  SlideOutDown,
} from "react-native-reanimated";
import { LoadingView } from "./Loaders";
import { useWatchlistStore } from "../Store/Store";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";


type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Movie">;
type PopularMoviesProps = {
  popularMovies: Array<any>
};

const PopularMovies:React.FC<PopularMoviesProps> = ({ popularMovies }: { popularMovies: Array<any> }) => {
const dark = useWatchlistStore((state) => state?.darkTheme);
const navigation = useNavigation<NavigationProp>();
  return (
    <View className="flex flex-col">
      <FlatList
        data={popularMovies?.slice(0, 10)}
        horizontal
        contentContainerClassName="gap-5 pb-7"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable onPress={() =>navigation?.navigate("Movie",{
            id:item?.id
          })}>
            <Animated.View
              className="w-[144px] h-[210px] flex flex-col relative"
              entering={SlideInUp}
              exiting={SlideOutDown}
              layout={SequencedTransition}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
                className="w-full h-full rounded-xl absolute top-0 left-0"
                resizeMode="cover"
              />
              <Text className="text-white text-[90px] font-poppins-semibold absolute -bottom-14 -left-2 z-10">
                {index + 1}
              </Text>
            </Animated.View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PopularMovies;
