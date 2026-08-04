import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { APP_COLOR } from "@/hooks/constant";

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false }}>
      {/* Nút 3 gạch ngoài cùng bên trái - Click MỞ DRAWER */}
      <Tabs.Screen
        name="drawer-button" // Route rỗng
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bars" size={size} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Chặn chuyển tab/màn hình
            e.preventDefault();
            // Mở Drawer trượt ra
            navigation.openDrawer();
          },
        })}
      />

      {/* Tab 1: Nhiệm vụ (Tương ứng file index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Nhiệm vụ",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />

      {/* Tab 2: Lịch (Tương ứng file calendar.tsx) */}
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Lịch",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calendar" size={size} color={color} />
          ),
        }}
      />

      {/* Tab 3: Của tôi (Tương ứng file account.tsx) */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Của tôi",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
