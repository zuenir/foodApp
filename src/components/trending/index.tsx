import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CardHorizontalFood } from "./food";

export interface FoodProps {
    id:  string; 
    name:  string; 
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image:  string;
    restaurantId:  string;
}

export const TrendingFoods = () => {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://192.168.56.1:3000/foods");
      const data = await response.json();
      setFoods(data);
    }
    getFood();
  }, []);

  return (
    <FlatList 
        data={foods} 
        renderItem={({ item }) => <CardHorizontalFood food={item} />}
         horizontal 
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
        />
  );
};
