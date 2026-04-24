import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Redes() {
  const open = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <Text style={styles.subtitle}>Agenda tu servicio ahora</Text>

      <Btn title="WhatsApp" icon="logo-whatsapp" onPress={() => open("https://wa.me/50400000000")} />
      <Btn title="Facebook" icon="logo-facebook" onPress={() => open("https://facebook.com")} />
      <Btn title="Instagram" icon="logo-instagram" onPress={() => open("https://instagram.com")} />
    </View>
  );
}

function Btn({ title, icon, onPress }: any) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#F4B400" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A", padding: 20 },

  title: { fontSize: 24, color: "#F4B400" },

  subtitle: { color: "#777", marginBottom: 20 },

  btn: {
    flexDirection: "row",
    backgroundColor: "#151515",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  text: { color: "#FFF", marginLeft: 10 },
});