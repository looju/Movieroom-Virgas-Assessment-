import { Colors } from "@/src/Constants/Constants";
import React, { FunctionComponent, lazy } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  LayoutAnimation,
  Pressable,
  View,
} from "react-native";

import {
  BounceInDown,
  BounceInUp,
  LinearTransition,
  ReduceMotion,
} from "react-native-reanimated";
import { useWatchlistStore } from "../Store/Store";
import { AnimatedFlatlist, AnimatedPressable } from "../Components/AnimatedComponents";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "@/types";


 type Props = RootStackScreenProps<"Movie">;
const MovieGrid:FunctionComponent<Props> = ({ movies }: { movies: Array<any> }) => {
  const dark = useWatchlistStore((state) => state?.darkTheme);
  const navigation=useNavigation()
  const Movies = Array.from({ length: 20 }).map((c, i) => ({
    id: i,
    image: "https://picsum.photos/200/300",
    title: "Superman",
  }));
 
  return (
    <>  
      <AnimatedFlatlist
        data={movies}
        entering={BounceInDown.duration(1000)
          .randomDelay()
          .reduceMotion(ReduceMotion.Never)}
        layout={LinearTransition.duration(1200)}
        contentContainerClassName="flex flex-col pb-[480px]"
        columnWrapperClassName="flex flex-row mb-5 gap-12 items-center w-[100%] justify-center"
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: any }) => (
          <AnimatedPressable
            className="w-[40%] flex flex-col justify-center items-center"
            onPress={() => router.push(`/movie/${item.id}`)}
          >
            <View className="w-[150px] h-[185px] relative">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                className="w-full h-full absolute top-0 left-0 rounded-3xl"
              />
            </View>
            <ThemedText className="mt-2">{item?.title}</ThemedText>
          </AnimatedPressable>
        )}
      />
    </>
  );
};

export default MovieGrid;
