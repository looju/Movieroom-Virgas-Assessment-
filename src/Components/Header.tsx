import { images } from "@/src/Constants/Constants";
import { useWatchlistStore } from "@/src/Store/Store";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  itemMovie: any;
  movieExists: boolean;
}

const Header = ({ title, itemMovie, movieExists }: HeaderProps) => {
  const router = useNavigation()

  const { addMovie, removeMovie } = useWatchlistStore();

  return (
    <View className="flex flex-row items-center justify-between py-5 px-5">
      <TouchableOpacity onPress={() => router.goBack()}>
        <Image
          source={images.arrowLeft}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <ThemedText className="text-white text-xl font-poppins-semibold text-center">
        {title}
      </ThemedText>
      <TouchableOpacity
        onPress={() =>
          movieExists ? removeMovie(itemMovie.id) : addMovie(itemMovie)
        }
      >
        <Image
          source={images.watchList}
          className="w-5 h-5"
          resizeMode="contain"
          tintColor={movieExists ? "orange" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
