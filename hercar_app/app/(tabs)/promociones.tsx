import { View, Text, StyleSheet } from "react-native";

export default function Promociones() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promociones</Text>
      <Text style={styles.subtitle}>
        Próximamente ofertas exclusivas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A", justifyContent: "center", alignItems: "center" },

  title: { color: "#F4B400", fontSize: 24 },

  subtitle: { color: "#777" },
});