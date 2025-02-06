import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";

export const CardHorizontalFood = ({ food }: { food: FoodProps }) => {
  return (
    <Pressable className="flex flex-col rounded-xl bg-white">
      <Image
        source={{ uri: food.image }}
        className="w-44 h-32 rounded-tr-2xl rounded-tl-2xl"
      />
      <View className="flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-2 px-2 py-1 items-center justify-center">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-white text-sm">{food.rating}</Text>
      </View>
      <View className="px-2 mb-2">
        <Text className="font-medium text-lg">
          {food.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          Kz
        </Text>
        <Text className="text-black mt-1">{food.name}</Text>
        <Text className="text-neutral-600 text-sm">
          {food.time} -{" "}
          {food.delivery.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          Kz
        </Text>
      </View>
    </Pressable>
  );
};
