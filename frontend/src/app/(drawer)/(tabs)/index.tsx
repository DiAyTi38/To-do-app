import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderHome from "@/app/home/header.home";
import CustomFlatList from "@/hooks/CustomFlatList";
import { useCallback, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CreateTaskPage } from "@/components/CreateTask";
import { useTasks } from "@/context/taskcontext";
import { TaskItem } from "@/components/TaskItem";

const MissionScreen = () => {
  const [selectedId, setSelectedId] = useState("1");
  const [showTooltip, setShowTooltip] = useState(true);
  const { tasks, toggleTask, deleteTask } = useTasks();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = useCallback(() => {
    setShowTooltip(false);
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <CustomFlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTask(item.id)}>
            <TaskItem task={item} />
          </TouchableOpacity>
        )}
        StickyElementComponent={
          <HeaderHome activeId={selectedId} onSelect={setSelectedId} />
        }
        HeaderComponent={<></>}
        TopListElementComponent={<></>}
      />

      {/* Bong bóng gợi ý màu vàng */}
      {showTooltip && (
        <View style={styles.tooltipContainer}>
          <View style={styles.tooltipBubble}>
            <Text style={styles.tooltipText}>
              Bấm vào đây để tạo nhiệm vụ đầu tiên của bạn.
            </Text>
          </View>
          {/* Đuôi tam giác trỏ xuống nút FAB */}
          <View style={styles.tooltipArrow} />
        </View>
      )}

      {/* Nút Dấu cộng Floating Action Button (+) */}
      <TouchableOpacity
        style={styles.fabButton}
        activeOpacity={0.8}
        onPress={handleOpenBottomSheet}
      >
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
      <CreateTaskPage ref={bottomSheetModalRef} activeCategoryId={selectedId} />
    </SafeAreaView>
  );
};

export default MissionScreen;

const styles = StyleSheet.create({
  // Nút FAB màu xanh dương lơ lửng góc dưới phải
  fabButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#7baaf7",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },

  // Khung Tooltip hướng dẫn màu vàng
  tooltipContainer: {
    position: "absolute",
    bottom: 85,
    right: 20,
    left: 20,
    alignItems: "flex-end",
  },
  tooltipBubble: {
    backgroundColor: "#fbc756",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 12,
    maxWidth: "85%",
  },
  tooltipText: {
    fontSize: 15,
    color: "#2d2d2d",
    fontWeight: "500",
    lineHeight: 22,
  },
  // Mũi tên tam giác chỉ xuống nút FAB
  tooltipArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#fbc756",
    marginRight: 20,
  },
});
