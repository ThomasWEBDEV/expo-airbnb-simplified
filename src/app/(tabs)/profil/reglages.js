
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function ReglagesScreen() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function valider() {
    if (!nom || !email.includes("@")) {
      setMessage("Nom ou email invalide");
    } else {
      setMessage("Formulaire validé !");
    }
  }

  return (
    <View>
      <Text>Nom</Text>
      <TextInput
        placeholder="Ton nom"
        value={nom}
        onChangeText={setNom}
      />

      <Text>Email</Text>
      <TextInput
        placeholder="Ton email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Valider" onPress={valider} />

      <Text>{message}</Text>
    </View>
  );
}
