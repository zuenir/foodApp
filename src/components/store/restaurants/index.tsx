import React from "react";
import { StoreProps } from "..";
import { Image, Text, Pressable } from "react-native";

export const CardHorizontalRestaurants = ({
  restaurants,
}: {
  restaurants: StoreProps;
}) => {
  return (
    <Pressable 
      className="flex flex-col items-center justify-center" 
      onPress={()=> console.log("Restaurante" + restaurants.name)}>
      <Image
        source={{ uri: restaurants.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text 
        className="text-sm text-black mt-1 leading-4" 
        numberOfLines={2}>
        {restaurants.name}
      </Text>
    </Pressable>
  );
};
