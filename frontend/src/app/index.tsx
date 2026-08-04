import { Redirect, router, useRootNavigationState } from "expo-router";
import { View } from "react-native";

const RootPage = () => {
  return (
    <View>
      <Redirect href={"/(auth)/welcome"} />
    </View>
  );
};

export default RootPage;
