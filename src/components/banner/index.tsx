import React, { useRef, useEffect, useState } from "react";
import { View, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";
import { MotiImage } from "moti";

const images = [
  { id: 1, src: require("../../assets/banner1.jpg"), label: "Banner #1" },
  { id: 2, src: require("../../assets/banner2.jpg"), label: "Banner #2" },
  { id: 3, src: require("../../assets/banner3.jpg"), label: "Banner #3" }, // Adicione mais imagens se necessário
];

export const Banner = () => {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  // Auto play: alternar páginas automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => {
        const nextPage = (prevPage + 1) % images.length; // Loop infinito
        pagerRef.current?.setPage(nextPage);
        return nextPage;
      });
    }, 4000); // Muda a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView
        style={{ flex: 1 }}
        ref={pagerRef}
        initialPage={0}
        pageMargin={14}
      >
        {images.map((item, index) => (
          <Pressable
            className="w-full h-36 md:h-60 rounded-2xl"
            key={item.id}
            onPress={() => console.log(item.label)}
          >
            <MotiImage
              source={item.src}
              className="w-full h-36 rounded-2xl"
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "timing", duration: 1000 }}
            />
          </Pressable>
        ))}
      </PagerView>
    </View>
  );
};
