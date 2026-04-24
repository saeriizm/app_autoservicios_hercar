import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.logo}>HERCAR</Text>
        <Text style={styles.tagline}>
          Servicio Automotriz Profesional
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>¿Quiénes somos?</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Servicios</Text>
        <Text style={styles.text}>• Diagnóstico automotriz</Text>
        <Text style={styles.text}>• Mantenimiento general</Text>
        <Text style={styles.text}>• Reparaciones mecánicas</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },

  header: {
    padding: 20,
    alignItems: "center",
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F4B400",
  },

  tagline: {
    color: "#888",
  },

  card: {
    backgroundColor: "#151515",
    margin: 15,
    padding: 20,
    borderRadius: 12,
  },

  title: {
    color: "#F4B400",
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    color: "#DDD",
  },
});