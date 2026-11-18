import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import LogementCard from "../../../components/LogementCard";
import { useFavoris } from "../../../context/FavorisContext";
import { logements } from "../../../data/logements";

export default function Favoris() {
  const { favorisIds, isFavori, toggleFavori } = useFavoris();
  const logementsFavoris = logements.filter((item) => favorisIds.includes(item.id));

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Mes favoris</Text>
      <Text style={styles.sousTitre}>
        {logementsFavoris.length} logement{logementsFavoris.length > 1 ? "s" : ""} enregistré
        {logementsFavoris.length > 1 ? "s" : ""}
      </Text>

      <FlatList
        data={logementsFavoris}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <LogementCard
            logement={item}
            favori={isFavori(item.id)}
            onPress={() => router.push(`/logement/${item.id}`)}
            onToggleFavori={() => toggleFavori(item.id)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.vide}>
            <Text style={styles.coeur}>♡</Text>
            <Text style={styles.message}>Aucun favori pour le moment</Text>
          </View>
        }
        contentContainerStyle={styles.liste}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  titre: {
    color: "#222",
    fontSize: 26,
    fontWeight: "800",
  },
  sousTitre: {
    marginTop: 4,
    marginBottom: 22,
    color: "#777",
    fontSize: 14,
  },
  row: {
    justifyContent: "space-between",
  },
  liste: {
    paddingBottom: 24,
  },
  vide: {
    alignItems: "center",
    paddingTop: 90,
    paddingHorizontal: 24,
  },
  coeur: {
    color: "#e31c5f",
    fontSize: 54,
  },
  message: {
    marginTop: 12,
    color: "#222",
    fontSize: 18,
    fontWeight: "700",
  },
  conseil: {
    marginTop: 8,
    color: "#777",
    fontSize: 14,
    textAlign: "center",
  },
});
