import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="accueil" options={{ title: "Accueil" }} />
      <Tabs.Screen name="favoris" options={{ title: "Favoris" }} />
      <Tabs.Screen name="profil" options={{ title: "Profil" }} />
      <Tabs.Screen name="reglages" options={{ title: "Réglages" }} />
    </Tabs>
  );
}
