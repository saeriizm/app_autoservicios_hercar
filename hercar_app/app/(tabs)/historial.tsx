import { View, Text, StyleSheet } from "react-native";

export default function Historial() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A", justifyContent: "center", alignItems: "center" },

  title: { color: "#F4B400", fontSize: 22 },
});