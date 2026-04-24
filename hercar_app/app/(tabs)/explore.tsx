import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

export default function Explore() {
  return (
    <ScrollView style={styles.container}>

      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>HERCAR</Text>
        <Text style={styles.tagline}>
          Servicio Automotriz Profesional
        </Text>
      </View>

      {/* CARD PRINCIPAL */}
      <View style={styles.card}>
        <Text style={styles.title}>¿Quiénes somos?</Text>
        <Text style={styles.text}>
          Taller automotriz especializado en mantenimiento,
          diagnóstico y reparación de vehículos, ofreciendo
          un servicio confiable y de calidad.
        </Text>
      </View>

      {/* SERVICIOS */}
      <View style={styles.card}>
        <Text style={styles.title}>Servicios</Text>

        <Item text="Diagnóstico automotriz" />
        <Item text="Mantenimiento general" />
        <Item text="Reparaciones mecánicas" />
        <Item text="Revisión completa" />
      </View>

      {/* COMPROMISO */}
      <View style={styles.card}>
        <Text style={styles.title}>Nuestro compromiso</Text>
        <Text style={styles.text}>
          Brindar un servicio profesional, rápido y confiable,
          asegurando el mejor rendimiento de tu vehículo.
        </Text>
      </View>

    </ScrollView>
  );
}

function Item({ text }: any) {
  return (
    <View style={styles.item}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },

  header: {
    paddingTop: 20, 
    paddingBottom: 20,
    alignItems: "center",
  },

  logo: {
    fontSize: 32,
    fontWeight: "900",
    color: "#F4B400",
  },

  tagline: {
    color: "#888",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#151515",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 18,
    borderRadius: 16,
  },

  title: {
    color: "#F4B400",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    color: "#DDD",
    lineHeight: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  bullet: {
    color: "#F4B400",
    marginRight: 8,
    fontSize: 16,
  },

  itemText: {
    color: "#DDD",
  },
});