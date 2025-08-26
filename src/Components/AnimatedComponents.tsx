import { FlatList, Pressable } from "react-native";
import { ThemedSafeAreaView } from "./ThemedComponent";

import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  interpolateColor,
} from "react-native-reanimated";

export const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const AnimatedThemedSafeArea =
  Animated.createAnimatedComponent(ThemedSafeAreaView);

export const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

export default function AnimatedBackground() {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ["#000000", "#ffffff"]
    );

    return {
      backgroundColor,
    };
  });

  return <Animated.View style={[styles.container, animatedStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
