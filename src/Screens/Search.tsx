
import { RootStackParamList } from "@/types";
import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  BounceIn,
  BounceInDown,
  BounceInUp,
  BounceOut,
  BounceOutDown,
  FadeIn,
  FadeOut,
  JumpingTransition,
  LinearTransition,
  ReduceMotion,
  SequencedTransition,
  SlideInUp,
  SlideOutDown,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWatchlistStore } from "../Store/Store";
import { ThemedSafeAreaView, ThemedText } from "../Components/ThemedComponent";
import HeaderSearch from "../Components/HeaderSearch";
import { Colors, images } from "../Constants/Constants";
import { AnimatedFlatlist, AnimatedPressable } from "../Components/AnimatedComponents";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSearch } from "../Hooks/useMovies";


type SearchProp = RouteProp<RootStackParamList,"Search">;
type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Movie">;
const Search = () => {
  const route=useRoute<SearchProp>()
  const {query}=route?.params
  const dark = useWatchlistStore((state) => state?.darkTheme);
  const navigation=useNavigation<NavigationProp>()
  const { data: movies, isLoading } = useSearch(query ?? "");
  return (
    <ThemedSafeAreaView className="flex-1 bg-dark">
      <View className="flex flex-row items-center justify-center py-5 px-5">
        <ThemedText className="text-xl font-poppins-semibold text-center self-center">
          Search
        </ThemedText>
        <View></View>
      </View>
      <View className="flex flex-col mx-7">
        <HeaderSearch />
      </View>
      <View className="flex flex-col">
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={dark ? Colors.white : Colors.black}
            className="self-center mt-3"
          />
        ) : (
          <View>
            {movies?.length === 0 && (
              <View className="flex flex-col items-center h-full mt-20">
                <Image
                  source={images.noWatchList}
                  className="w-20 h-20 mb-3"
                  resizeMode="contain"
                />
                <ThemedText className="text-white text-xl pb-1 w-52 mx-auto text-center">
                  we are sorry, we can not find the movie
                </ThemedText>
                <ThemedText className="text-gray-400 text-sm w-52 mx-auto text-center">
                  Find your movie by Type title, categories, years, etc{" "}
                </ThemedText>
              </View>
            )}
            {query?.length == 0 ||
              (query == undefined && (
                <Animated.View
                  className="flex flex-col items-center justify-center self-center h-full"
                  entering={BounceIn}
                  exiting={BounceOut}
                >
                  <Image
                    source={require("@/assets/images/search 2.png")}
                    className="w-20 h-20 mb-5"
                    resizeMode="contain"
                  />
                  <Text
                    className={`${dark ? "text-gray-100" : "text-gray-600"} text-l pb-1 mb-2`}
                  >
                    There is no search query yet!
                  </Text>
                  <Text
                    className={"text-gray-400 text-sm w-52 mx-auto text-center"}
                  >
                    Find your favourite movie by Type title, categories, years
                    by searching them.
                  </Text>
                </Animated.View>
              ))}
            {movies?.length > 0 && (
              <AnimatedFlatlist
                data={movies}
                entering={BounceInDown.duration(1000)
                  .randomDelay()
                  .reduceMotion(ReduceMotion.Never)}
                layout={LinearTransition.duration(1200)}
                contentContainerClassName="flex flex-col pb-[480px]"
                columnWrapperClassName="flex flex-row mb-5 gap-12 items-center w-[100%] justify-center"
                numColumns={3}
                renderItem={({ item }: { item: any }) => (
                  <AnimatedPressable
                    className="w-[32%] flex flex-col"
                    onPress={() => navigation.navigate("Movie",{
                      id:item?.id
                    })}
                    entering={BounceInUp}
                    exiting={BounceOutDown}
                    layout={JumpingTransition}
                  >
                    <View className="w-[150px] h-[185px] relative">
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        }}
                        className="w-full h-full rounded-lg absolute top-0 left-0"
                      />
                    </View>
                    <ThemedText className="mt-2">{item?.title}</ThemedText>
                  </AnimatedPressable>
                )}
              />
            )}
          </View>
        )}
      </View>
    </ThemedSafeAreaView>
  );
};

export default Search;
