import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const COLORS = {
  bg: "#0A0A0A",
  border: "#1F1F1F",
  primary: "#F4B400",
  muted: "#777",
  text: "#FFF",
};

function Icon({ name, color, focused }: any) {
  return (
    <View style={[styles.icon, focused && styles.active]}>
      <Ionicons name={name} size={20} color={color} />
    </View>
  );
}

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.bg },
        headerTintColor: COLORS.text,
        headerTitleAlign: "center",

        tabBarStyle: {
          backgroundColor: COLORS.bg,
          borderTopColor: COLORS.border,
          height: 65,
        },

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "HERCAR",
          tabBarIcon: (p) => <Icon {...p} name="home" />,
        }}
      />

      <Tabs.Screen
        name="trabajos"
        options={{
          title: "Servicios",
          tabBarIcon: (p) => <Icon {...p} name="construct" />,
        }}
      />

      <Tabs.Screen
        name="productos"
        options={{
          title: "Productos",
          tabBarIcon: (p) => <Icon {...p} name="cube-outline" />,
        }}
      />

      <Tabs.Screen
        name="historial"
        options={{
          title: "Historial",
          tabBarIcon: (p) => <Icon {...p} name="time-outline" />,
        }}
      />

      <Tabs.Screen
        name="redes"
        options={{
          title: "Contacto",
          tabBarIcon: (p) => <Icon {...p} name="call" />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 6,
    borderRadius: 10,
  },
  active: {
    backgroundColor: "#F4B40020",
  },
});