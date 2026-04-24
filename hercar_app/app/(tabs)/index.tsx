import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.hero}>
        <Text style={styles.logo}>HERCAR</Text>
        <Text style={styles.tagline}>
          Servicio Automotriz Profesional
        </Text>
      </View>

      <View style={styles.actions}>
        <MainButton title="Ver Servicios" icon="construct" route="/trabajos" />
        <MainButton title="Contactar" icon="logo-whatsapp" route="/redes" primary />
      </View>

      <View style={styles.grid}>
        <MiniCard title="Promociones" icon="pricetag" route="/promociones" />
        <MiniCard title="Productos" icon="cube-outline" route="/productos" />
      </View>

    </View>
  );
}

function MainButton({ title, icon, route, primary }: any) {
  return (
    <TouchableOpacity
      style={[styles.mainBtn, primary && styles.primary]}
      onPress={() => router.push(route)}
    >
      <Ionicons name={icon} size={20} color="#000" />
      <Text style={styles.mainText}>{title}</Text>
    </TouchableOpacity>
  );
}

function MiniCard({ title, icon, route }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(route)}>
      <Ionicons name={icon} size={24} color="#F4B400" />
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A", padding: 20 },

  hero: { marginTop: 50, marginBottom: 30 },

  logo: {
    fontSize: 36,
    fontWeight: "900",
    color: "#F4B400",
  },

  tagline: { color: "#888" },

  actions: { gap: 15, marginBottom: 25 },

  mainBtn: {
    flexDirection: "row",
    backgroundColor: "#F4B400",
    padding: 15,
    borderRadius: 14,
    justifyContent: "center",
  },

  primary: { backgroundColor: "#25D366" },

  mainText: { marginLeft: 10, fontWeight: "700" },

  grid: { flexDirection: "row", justifyContent: "space-between" },

  card: {
    width: "48%",
    backgroundColor: "#151515",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },

  cardText: { color: "#FFF", marginTop: 10 },
});