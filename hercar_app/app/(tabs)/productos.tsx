import { View, Text, StyleSheet } from "react-native";

export default function Productos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <Text style={styles.subtitle}>
        Catálogo en desarrollo
      </Text>

      <View style={styles.card}>
        <Text style={{ color: "#FFF" }}>
          Ej: Aceites, filtros, repuestos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A", padding: 20 },

  title: { color: "#F4B400", fontSize: 24 },

  subtitle: { color: "#777", marginBottom: 20 },

  card: {
    backgroundColor: "#151515",
    padding: 20,
    borderRadius: 14,
  },
});