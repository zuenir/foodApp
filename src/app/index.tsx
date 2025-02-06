import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Store } from "../components/store";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Veja mais"
        action={() => console.log("ver mais")}
      />
      <TrendingFoods />
      <Section
        name="Os Mais Pedidos"
        size="text-2xl"
        label="Veja mais"
        action={() => console.log("ver mais")}
      />
      <Store />
      <Section name="Restaurantes" size="text-2xl" />
      <RestaurantVerticalList />
    </ScrollView>
  );
}
