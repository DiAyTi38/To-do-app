import { APP_COLOR } from "@/hooks/constant";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: APP_COLOR.BLUE,
        headerTitleStyle: {
          color: "black",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, freezeOnBlur: false }}
      />

      <Stack.Screen
        name="(auth)/welcome"
        options={{ headerShown: false, freezeOnBlur: false }}
      />

      <Stack.Screen
        name="(tabs)/index"
        options={{ headerShown: false, freezeOnBlur: false }}
      />
    </Stack>
  );
};

export default RootLayout;
