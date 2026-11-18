import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { logements } from "../../data/logements";

export default function Logement() {
  const { id } = useLocalSearchParams();
  const logement = logements.find((item) => item.id === String(id));

  if (!logement) {
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>Logement introuvable</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>{logement.title}</Text>
      <Text>{logement.city}</Text>
      <Text>{logement.price} € par nuit</Text>
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
  },
});
