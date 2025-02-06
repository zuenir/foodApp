import React, { useEffect, useState } from "react";
import { StoreProps } from "../store";
import { Text, View } from "react-native";
import { Item } from "./item";

export const RestaurantVerticalList = () => {
  const [store, setStore] = useState<StoreProps[]>([]);

  useEffect(() => {
    async function getRestaurant() {
      const response = await fetch("http://192.168.56.1:3000/restaurants");
      const data = await response.json();
      setStore(data);
    }
    getRestaurant();
  }, []);

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
        {store.map(item =>(
            <Item item={item} key={item.id}/>
        ))}
    </View>
  );
};
