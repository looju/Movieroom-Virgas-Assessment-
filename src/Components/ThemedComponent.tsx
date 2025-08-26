import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import { useWatchlistStore } from "../Store/Store";
import { Colors } from "../Constants/Constants";

type ViewThemeProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

type ScrollThemeProps = ScrollViewProps & {
  style?: StyleProp<ViewStyle>;
};

type SafeAresThemeProps = SafeAreaViewProps & {
  style?: StyleProp<ViewStyle>;
};

type TextThemeProps = TextProps & {
  style?: StyleProp<TextStyle>;
};

export const ThemedView = ({ style, ...otherProps }: ViewThemeProps) => {
  const dark = useWatchlistStore((state) => state?.darkTheme);
  return (
    <View
      style={[{ backgroundColor: dark ? Colors.black : Colors.white }, style]}
      {...otherProps}
    />
  );
};

export const ThemedScrollView = ({
  style,
  ...otherProps
}: ScrollThemeProps) => {
  const dark = useWatchlistStore((state) => state?.darkTheme);
  return (
    <ScrollView
      style={[{ backgroundColor: dark ? Colors.black : Colors.white }, style]}
      {...otherProps}
    />
  );
};

export const ThemedSafeAreaView = ({
  style,
  ...otherProps
}: SafeAresThemeProps) => {
  const dark = useWatchlistStore((state) => state?.darkTheme);
  return (
    <SafeAreaView
      style={[{ backgroundColor: dark ? Colors.black : Colors.white }, style]}
      {...otherProps}
    />
  );
};

export const ThemedText = ({ style, ...otherProps }: TextThemeProps) => {
  const dark = useWatchlistStore((state) => state?.darkTheme);
  return (
    <Text
      style={[{ color: !dark ? Colors.black : Colors.white }, style]}
      {...otherProps}
    />
  );
};
