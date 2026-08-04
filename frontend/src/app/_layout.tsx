import { APP_COLOR } from "@/hooks/constant";
import { Stack } from "expo-router";
import { enableFreeze } from "react-native-screens";

// Tắt hoàn toàn tính năng Screen Freezing toàn cục để tránh xung đột state giữa các Navigator lồng nhau
enableFreeze(false);

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: APP_COLOR.BLUE,
        headerTitleStyle: {
          color: "black",
        },
        freezeOnBlur: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

