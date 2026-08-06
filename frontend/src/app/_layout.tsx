import { APP_COLOR } from "@/hooks/constant";
import { Stack } from "expo-router";
import { enableFreeze } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { TaskProvider } from "../context/taskcontext";

// Tắt hoàn toàn tính năng Screen Freezing toàn cục để tránh xung đột state giữa các Navigator lồng nhau
enableFreeze(false);

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TaskProvider>
        <BottomSheetModalProvider>
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
            <Stack.Screen
              name="(auth)/welcome"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          </Stack>
        </BottomSheetModalProvider>
      </TaskProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
