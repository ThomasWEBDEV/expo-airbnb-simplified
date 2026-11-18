import { router } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import LogementCard from "../../../components/LogementCard";
import { useFavoris } from "../../../context/FavorisContext";
import { logements } from "../../../data/logements";

export default function Accueil() {
  const { isFavori, toggleFavori } = useFavoris();
  const [recherche, setRecherche] = useState("");

  const logementsFiltres = logements.filter((logement) => {
    const texte = recherche.trim().toLowerCase();

    return (
      logement.title.toLowerCase().includes(texte) ||
      logement.city.toLowerCase().includes(texte)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>staybnb</Text>
          <Text style={styles.slogan}>Trouvez votre prochain séjour</Text>
        </View>
      </View>

      <TextInput
        style={styles.searchBar}
        value={recherche}
        onChangeText={setRecherche}
        placeholder="Rechercher une destination"
      />

      <FlatList
        data={logementsFiltres}
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
        ListHeaderComponent={<Text style={styles.sectionTitle}>Logements populaires</Text>}
        contentContainerStyle={styles.liste}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingBottom: 16,
  },
  logo: {
    color: "red",
    fontSize: 26,
    fontWeight: "800",
  },
  slogan: {
    marginTop: 3,
    fontSize: 13,
  },
  searchBar: {
    marginBottom: 22,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 14,
    backgroundColor: "white",
    fontSize: 14,
  },
  sectionTitle: {
    marginBottom: 14,
    fontSize: 20,
    fontWeight: "700",
  },
  row: {
    justifyContent: "space-between",
  },
  liste: {
    paddingBottom: 24,
  },
});