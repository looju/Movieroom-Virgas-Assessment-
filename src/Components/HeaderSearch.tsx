
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";
import { useWatchlistStore } from "../Store/Store";
import { images } from "../Constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Search">;
const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  const router = useNavigation<NavigationProp>()
  const dark = useWatchlistStore((state) => state?.darkTheme);

  const handleSubmit = () => {
    if (!searchText.trim()) return;
    router.navigate("Search",{
     query:searchText?.trim()
    })  
    setSearchText("");
  };
  return (
    <KeyboardAvoidingView
      className="w-full h-12"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        className={`flex-between flex-row ${dark ? "bg-[#3A3F47]" : "bg-slate-100"} rounded-2xl relative`}
      >
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSubmit}
          placeholder="Search"
          placeholderTextColor="#67686D"
          placeholderClassName="text-sm text-secondary font-poppins-regular"
          className="text-white font-poppins-regular text-base flex-1 w-full h-full px-6 py-3"
        />
        <Image
          source={images.search}
          className="w-4 h-4 absolute right-6 top-1/2 transform -translate-y-1/2"
          resizeMode="contain"
          alt="Search Icon"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HeaderSearch;
