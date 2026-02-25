import { View, Text, StyleSheet, FlatList } from "react-native";

const servicios = [
  { id: "1", nombre: "Cambio de Aceite", precio: "$25" },
  { id: "2", nombre: "Lavado Completo", precio: "$15" },
  { id: "3", nombre: "Alineación y Balanceo", precio: "$40" },
  { id: "4", nombre: "Revisión de Frenos", precio: "$30" },
  { id: "5", nombre: "Diagnóstico General", precio: "$50" },
];

export default function Trabajos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Servicios Disponibles</Text>

      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "600",
  },
  precio: {
    fontSize: 16,
    color: "#f4b400",
    marginTop: 5,
  },
});