import { Redirect, router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const RootPage = () => {
  // useEffect(() => {
  //   try {
  //     if (true) {
  //       router.navigate("/(auth)/welcome");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

  return (
    <View>
      <Redirect href={"/(auth)/welcome"} />
    </View>
  );
};

export default RootPage;
