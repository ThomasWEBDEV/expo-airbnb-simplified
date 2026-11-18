import { StyleSheet, Text, View } from "react-native";

export default function Logement() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Logement</Text>
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
