import { Link, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFavoris } from "../../context/FavorisContext";
import { logements } from "../../data/logements";

export default function Logement() {
  const { id } = useLocalSearchParams();
  const logement = logements.find((item) => item.id === String(id));
  const { isFavori, toggleFavori } = useFavoris();

  if (!logement) {
    return (
      <View style={styles.erreur}>
        <Text style={styles.titre}>Logement introuvable</Text>
        <Link href="/accueil" style={styles.retour}>
          Retour à l'accueil
        </Link>
      </View>
    );
  }

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Link href="/accueil" style={styles.retour}>
        ‹ Retour aux logements
      </Link>

      <View style={styles.imageContainer}>
        <Image source={{ uri: logement.image }} style={styles.image} />
        <Pressable
          onPress={() => toggleFavori(logement.id)}
          style={styles.favoriteButton}
        >
          <Text style={[styles.favorite, isFavori(logement.id) && styles.favoriteActive]}>
            {isFavori(logement.id) ? "♥" : "♡"}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.titre}>{logement.title}</Text>
      <Text style={styles.city}>{logement.city}</Text>
      <Text style={styles.price}>{logement.price} € par nuit</Text>

      <View style={styles.separator} />
      <Text style={styles.description}>Un logement confortable pour profiter pleinement de votre séjour.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contenu: {
    padding: 16,
    paddingBottom: 32,
  },
  retour: {
    marginBottom: 16,
    color: "#222",
    fontSize: 15,
    fontWeight: "600",
  },
  imageContainer: {
    position: "relative",
    marginHorizontal: -16,
  },
  image: {
    width: "100%",
    height: 280,
  },
  favoriteButton: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#fff",
  },
  favorite: {
    color: "#333",
    fontSize: 27,
  },
  favoriteActive: {
    color: "#e31c5f",
  },
  titre: {
    marginTop: 20,
    color: "#222",
    fontSize: 26,
    fontWeight: "800",
  },
  city: {
    marginTop: 8,
    color: "#666",
    fontSize: 16,
  },
  price: {
    marginTop: 18,
    color: "#222",
    fontSize: 17,
    fontWeight: "700",
  },
  separator: {
    height: 1,
    marginVertical: 22,
    backgroundColor: "#e5e5e5",
  },
  description: {
    color: "#444",
    fontSize: 15,
    lineHeight: 22,
  },
  erreur: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
