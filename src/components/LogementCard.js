// E1.3 — Carte marquable
// La carte ne décide rien : elle AFFICHE la marque (prop `marque`)
// et PRÉVIENT le parent quand on la touche (prop `onToggle`).
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function LogementCard({ logement, marque, onToggle }) {
  return (
    <Pressable onPress={onToggle} style={[styles.card, marque && styles.cardMarquee]}>
      {logement.image ? (
        <Image source={{ uri: logement.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>Pas de photo</Text>
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={2}>
          {marque ? "★ " : ""}
          {logement.title}
        </Text>
        <Text>{logement.city}</Text>
        <Text style={styles.price}>{logement.price} €</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  cardMarquee: { borderColor: "#FF5A5F", borderWidth: 2 },
  image: { width: "100%", aspectRatio: 16 / 9, borderRadius: 8 },
  placeholder: { backgroundColor: "#eee", alignItems: "center", justifyContent: "center" },
  placeholderText: { color: "#888" },
  row: { flexDirection: "row", alignItems: "flex-start", gap: 8, marginTop: 8 },
  title: { flex: 1, fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 16, fontWeight: "700" },
});
