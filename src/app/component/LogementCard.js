
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Logement = [
  {
    id: 1,
    title: "Maison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagneMaison de campagne",
    city: "Paris",
    price: 120,
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    title: "Appartement",
    city: "Lyon",
    price: 50,
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    title: "Maison de ville",
    city: "Rennes",
    price: 120,
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

function LogementItem({ logement }) {
  const [marque, setMarque] = useState(false);

  return (
    <Pressable
      style={styles.card}
      onPress={() => setMarque(!marque)}
    >
      <View style={styles.cardContent}>
        <Image source={{ uri: logement.image }} style={styles.image} />

        <View>
          <Text numberOfLines={2}>
            {marque ? "★ " : ""}
            {logement.title}
          </Text>
        </View>

        <View style={styles.ContentPriceandCity}>
          <Text>{logement.city}</Text>
          <Text>{logement.price} €</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function LogementCard() {
  return (
    <View>
      {Logement.map((logement) => (
        <LogementItem key={logement.id} logement={logement} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  ContentPriceandCity: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    padding: 15,
  },
});
