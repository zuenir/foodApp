import React from "react";
import { StoreProps } from "../../store";
import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Item = ({ item }: { item: StoreProps }) => {
  return (
    <Pressable
      className="flex flex-row items-center justify-between gap-2 rounded-2xl bg-white"
      onPress={() => console.log("Restaurante" + item.name)}
    >
      <View className="flex flex-col ml-2">
        <Text className="text-lg text-black mt-1 font-bold">
          {item.name}
        </Text>
        <View className="flex flex-row items-center">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm" style={{ color: "#ca8a04" }}>
            {item.rating}
          </Text>
        </View>
      </View>
      <Image
        source={{ uri: item.image }}
        className="w-20 h-20 rounded-tr-2xl rounded-br-2xl"
      />
    </Pressable>
  );
};
