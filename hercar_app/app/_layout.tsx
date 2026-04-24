import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#111",
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#111",
        },
        tabBarActiveTintColor: "#f4b400",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tabs.Screen
        name="trabajos"
        options={{
          title: "Trabajos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="promociones"
        options={{
          title: "Promociones",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="historial"
        options={{
          title: "Historial",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />
    
    
     
    </Tabs>
  );
}