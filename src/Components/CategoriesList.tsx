import { categories } from "@/src/Constants/Constants";
import { useWatchlistStore } from "@/src/Store/Store";
import cn from "clsx";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CategoriesListProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoriesList = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesListProps) => {
  const dark = useWatchlistStore((state) => state?.darkTheme);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-5">
        {categories?.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              className={cn(
                "text-xl font-semibold pb-5",
                selectedCategory === category
                  ? "text-primary"
                  : !dark
                    ? "text-black"
                    : "text-white"
              )}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesList;
