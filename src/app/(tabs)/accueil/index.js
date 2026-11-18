import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import LogementCard from "../../../components/LogementCard";
import { useFavoris } from "../../../context/FavorisContext";
import { logements } from "../../../data/logements";

export default function Accueil() {
  const { isFavori, toggleFavori } = useFavoris();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>staybnb</Text>
          <Text style={styles.slogan}>Trouvez votre prochain séjour</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>T</Text>
        </View>
      </View>

      <Pressable style={styles.searchBar}>
        <Text style={styles.searchIcon}>⌕</Text>
        <Text style={styles.searchText}>Rechercher une destination</Text>
        <Text style={styles.filterIcon}>☷</Text>
      </Pressable>

      <FlatList
        data={logements}
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
    backgroundColor: "#fafafa",
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
    color: "#e31c5f",
    fontSize: 26,
    fontWeight: "800",
  },
  slogan: {
    marginTop: 3,
    color: "#777",
    fontSize: 13,
  },
  avatar: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: "#222",
  },
  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  searchIcon: {
    marginRight: 10,
    color: "#222",
    fontSize: 24,
  },
  searchText: {
    flex: 1,
    color: "#777",
    fontSize: 14,
  },
  filterIcon: {
    color: "#222",
    fontSize: 20,
  },
  sectionTitle: {
    marginBottom: 14,
    color: "#222",
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
