
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function ReponseTardive() {
  const [recherche, setRecherche] = useState(null);
  const [resultat, setResultat] = useState("");

  useEffect(() => {
    if (!recherche) return;

    let ignore = false;

    setTimeout(() => {
      if (!ignore) {
        setResultat(recherche.ville + " - " + recherche.detail);
      }
    }, 100);

    return () => {
      ignore = true;
    };
  }, [recherche]);

  function lancer(ville, detail) {
    setRecherche({ ville, detail });
  }

  return (
    <View>
      <Text>Réponses tardives</Text>

      <Button
        title="Paris"
        onPress={() => lancer("Paris", "Tour Eiffel")}
      />

      <Button
        title="Lyon"
        onPress={() => lancer("Lyon", "Bellecour")}
      />

      <Text>Résultat : {resultat}</Text>
    </View>
  );
}
