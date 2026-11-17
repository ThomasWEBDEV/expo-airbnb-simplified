import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogementCard from "./component/LogementCard";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Mon application Airbnb</Text>
     <ScrollView>
        <LogementCard/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
