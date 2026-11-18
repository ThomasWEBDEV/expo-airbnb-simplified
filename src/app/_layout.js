import { Stack } from "expo-router";
import { FavorisProvider } from "../context/FavorisContext";

export default function RootLayout() {
  return (
    <FavorisProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="logement" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal", headerShown: false }} />
      </Stack>
    </FavorisProvider>
  );
}
