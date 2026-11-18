import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Ma modale</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Fermer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  titre: {
    fontSize: 24,
    marginBottom: 20,
  },
});
