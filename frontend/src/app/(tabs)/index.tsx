import { SafeAreaView, Text, View } from "react-native";
import HeaderHome from "@/app/home/header.home";
import CustomFlatList from "@/hooks/CustomFlatList";
import { useState } from "react";

const HomeTab = () => {
  const [selectedId, setSelectedId] = useState("1");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomFlatList
        data={[]}
        renderItem={() => null}
        StickyElementComponent={
          <HeaderHome activeId={selectedId} onSelect={setSelectedId} />
        }
        HeaderComponent={<></>}
        TopListElementComponent={<></>}
      />
    </SafeAreaView>
  );
};

export default HomeTab;
