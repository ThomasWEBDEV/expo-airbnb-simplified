import { StyleSheet, Text, View } from "react-native";

export default function Reglages() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Réglages</Text>
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
