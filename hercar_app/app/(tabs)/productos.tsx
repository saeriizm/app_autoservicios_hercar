import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

type Producto = {
  id: string;
  nombre?: string;
  precio?: number | string;
  imagen?: string;
};

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const lista: Producto[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          lista.push({
            id: doc.id,
            nombre: data.nombre,
            precio: data.precio,
            imagen: data.imagen,
          });
        });

        setProductos(lista);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <Text style={styles.subtitle}>
        Repuestos y accesorios disponibles
      </Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* IMAGEN */}
            {item.imagen ? (
              <Image source={{ uri: item.imagen }} style={styles.image} />
            ) : (
              <View style={styles.noImage}>
                <Text style={{ color: "#777" }}>Sin imagen</Text>
              </View>
            )}

            {/* INFO */}
            <View style={styles.info}>
              <Text style={styles.nombre}>
                {item.nombre ?? "Sin nombre"}
              </Text>

              <Text style={styles.precio}>
                {item.precio !== undefined
                  ? `L. ${item.precio}`
                  : "Sin precio"}
              </Text>
            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    padding: 15,
  },

  title: {
    fontSize: 26,
    color: "#F4B400",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#777",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#151515",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 140,
  },

  noImage: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  info: {
    padding: 15,
  },

  nombre: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  precio: {
    color: "#F4B400",
    marginTop: 5,
  },
});