import { FlatList, StyleSheet, View } from "react-native";
import LogementCard from "../../../components/LogementCard";
import { logements } from "../../../data/logements";

export default function Accueil() {
  return (
    <View style={styles.container}>
      <FlatList
        data={logements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LogementCard logement={item} />}
        contentContainerStyle={styles.liste}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  liste: {
    paddingBottom: 16,
  },
});
