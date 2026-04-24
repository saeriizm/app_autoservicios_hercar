import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

type Servicio = {
  id: string;
  nombre?: string;
  precio?: number | string;
};

export default function Trabajos() {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "servicios"));
        const lista: Servicio[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("DOC:", doc.id, data);

          lista.push({
            id: doc.id,
            nombre: data.nombre,
            precio: data.precio,
          });
        });

        console.log("DATOS:", lista);
        setServicios(lista);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    obtenerServicios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Con hercar puedes realizar</Text>

      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>
              {item.nombre ? item.nombre : "Sin nombre"}
            </Text>
            <Text style={styles.precio}>
              {item.precio !== undefined ? `L. ${item.precio}` : "Sin precio"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91a8b3",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  nombre: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  precio: {
    fontSize: 16,
    color: "#f4b400",
    marginTop: 5,
  },
});