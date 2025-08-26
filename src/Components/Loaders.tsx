import { Colors } from "@/src/Constants/Constants"
import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

export const LoadingView = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="small" color={Colors.primary} />
      <Text
        style={{
          fontSize: 18,
          color: Colors.white,
          marginTop: 30,
        }}
      >
        Please wait...
      </Text>
    </View>
  );
};
