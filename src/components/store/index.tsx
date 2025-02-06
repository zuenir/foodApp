import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CardHorizontalRestaurants } from "./restaurants";

export interface StoreProps {
  id: string;
  name: string;
  image: string;
  rating?: number;
}

export const Store = () => {
  const [store, setStore] = useState<StoreProps[]>([]);

  useEffect(() => {
    async function getStore() {
      const response = await fetch("http://192.168.56.1:3000/restaurants");
      const data = await response.json();
      setStore(data);
    }
    getStore();
  }, []);

  return (
    <FlatList
      data={store}
      renderItem={({ item }) => (
        <CardHorizontalRestaurants restaurants={item} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
    />
  );
};
