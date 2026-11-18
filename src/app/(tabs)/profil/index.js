import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Profil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Profil</Text>

      <Pressable
        style={styles.bouton}
        onPress={() => router.push("/modal")}
      >
        <Text style={styles.boutonTexte}>Ouvrir la modale</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titre: {
    fontSize: 20,
    marginBottom: 20,
  },
  bouton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "red",
  },
  boutonTexte: {
    color: "white",
    fontWeight: "bold",
  },
});
