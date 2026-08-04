import { SafeAreaView } from "react-native";
import HeaderHome from "@/app/home/header.home";
import CustomFlatList from "@/hooks/CustomFlatList";
import { useState } from "react";

const MissionScreen = () => {
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

export default MissionScreen;
