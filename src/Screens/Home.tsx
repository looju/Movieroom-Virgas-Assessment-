
import React from "react";
import { useState } from "react";
import { Text, View, Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "zustand";
import Animated, { Easing, FadeIn, FadeOut } from "react-native-reanimated";

import Modal from "react-native-modal";
import { useWatchlistStore } from "../Store/Store";
import { Colors } from "../Constants/Constants";
import HeaderSearch from "../Components/HeaderSearch";
import PopularMovies from "../Components/PopularMovies";
import CategoriesList from "../Components/CategoriesList";
import MovieGrid from "./MovieGrid";
import { AnimatedThemedSafeArea } from "../Components/AnimatedComponents";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Now playing");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dark = useWatchlistStore((state) => state?.darkTheme);
  const switchMode = useWatchlistStore((state) => state.switchMode);
  const { data: popularMovies, isLoading } = usePopularMovies();
  const { data: movies, isLoading: moviesLoading } =
    useMovies(selectedCategory);

  return (
    <AnimatedThemedSafeArea
      className="flex-1 bg-dark"
      entering={FadeIn.duration(500).delay(100)}
    >
      <View className="flex flex-col gap-5 mt-3 mx-7">
        <View className="flex flex-row justify-between">
          <Text
            className={`text-xl font-poppins-semibold ${dark ? "text-white" : "text-black"}`}
          >
            What do you want to watch?
          </Text>
          <View className="flex flex-row items-center gap-2">
            <Image
              source={
                dark
                  ? require("@/assets/images/sun.png")
                  : require("@/assets/images/night.png")
              }
              className="w-5 h-5"
            />
            <Switch
              trackColor={{ false: Colors.black, true: Colors.grey }}
              thumbColor={isEnabled ? Colors.black : Colors.gold}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setIsEnabled(!isEnabled);
                switchMode(isEnabled);
              }}
              value={isEnabled}
            />
          </View>
        </View>

        <HeaderSearch />
        <PopularMovies popularMovies={popularMovies} />
        <CategoriesList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <MovieGrid movies={movies} />
      </View>
      {/* <Modal isVisible={isLoading || moviesLoading}>{LoadingView()}</Modal> */}
    </AnimatedThemedSafeArea>
  );
}
