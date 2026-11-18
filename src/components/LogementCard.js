import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function LogementCard({
  logement,
  favori,
  onPress,
  onToggleFavori,
}) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onPress} style={styles.contenu}>
        {logement.image ? (
          <Image source={{ uri: logement.image }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={styles.placeholderText}>Pas de photo</Text>
          </View>
        )}

        <View style={styles.informations}>
          <Text style={styles.title} numberOfLines={1}>
            {logement.title}
          </Text>
          <Text style={styles.city}>{logement.city}</Text>
          <Text style={styles.price}>{logement.price} € par nuit</Text>
        </View>
      </Pressable>

      <Pressable onPress={onToggleFavori} style={styles.favoriteButton}>
        <Text style={[styles.favorite, favori && styles.favoriteActive]}>
          {favori ? "♥" : "♡"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginBottom: 18,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  contenu: {
    paddingBottom: 12,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  placeholderText: {
    color: "grey",
  },
  informations: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    color: "#222",
    fontSize: 15,
    fontWeight: "700",
  },
  city: {
    marginTop: 4,
    fontSize: 13,
  },
  price: {
    marginTop: 8,
    color: "#222",
    fontSize: 13,
    fontWeight: "700",
  },
  favoriteButton: {
    top: 10,position: "absolute",
    right: 10,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "white",
  },
  favorite: {
    fontSize: 22,
  },
  favoriteActive: {
    color: "red",
  },
});
