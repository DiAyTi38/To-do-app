import { forwardRef, useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useTasks } from "@/context/taskcontext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { APP_COLOR } from "@/hooks/constant";

interface Props {
  activeCategoryId: string;
}

// Danh sách các danh mục lựa chọn
const categoryOptions = [
  { id: "0", name: "No Category" },
  { id: "1", name: "Công việc" },
  { id: "2", name: "Cá nhân" },
  { id: "3", name: "Danh sách ưa thích" },
];

export const CreateTaskPage = forwardRef<BottomSheetModal, Props>(
  ({ activeCategoryId }, ref) => {
    const [title, setTitle] = useState("");
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState(
      categoryOptions[0],
    );

    // State điều khiển bật/tắt menu chọn danh mục inline trực tiếp trong khung Tạo Task
    const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

    const { addTask } = useTasks();

    // SnapPoints tự động điều chỉnh độ cao linh hoạt
    const mainSnapPoints = useMemo(
      () => (showCategoryMenu ? ["40%", "55%"] : ["20%", "35%"]),
      [showCategoryMenu],
    );

    // Backdrop làm mờ nền đen đằng sau
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.4}
        />
      ),
      [],
    );

    // Xử lý mô phỏng Microphone
    const handleToggleMicrophone = () => {
      if (!isRecording) {
        setIsRecording(true);
        setTimeout(() => {
          setTitle("Tập Yoga lúc 6h tối");
          setIsRecording(false);
        }, 2500);
      } else {
        setIsRecording(false);
      }
    };

    // Xử lý Tạo Task
    const handleCreateTask = () => {
      if (!title.trim()) return;
      addTask(title.trim(), selectedCategory.id || activeCategoryId);
      setTitle("");
      setShowCategoryMenu(false);
      // @ts-ignore
      ref?.current?.dismiss();
    };

    const hasInput = title.trim().length > 0;

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={mainSnapPoints}
        backdropComponent={renderBackdrop}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <BottomSheetView style={styles.contentContainer}>
          {/* 1. Khung chứa Ô nhập văn bản + Nút Mic */}
          <View style={styles.inputContainer}>
            <BottomSheetTextInput
              style={styles.textInput}
              placeholder="Nhập tên nhiệm vụ của bạn..."
              placeholderTextColor="#9ca3af"
              value={title}
              onChangeText={setTitle}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              autoFocus
            />

            {/* Nút Microphone */}
            <TouchableOpacity
              style={styles.microphoneIcon}
              onPress={handleToggleMicrophone}
            >
              <MaterialCommunityIcons
                name={isRecording ? "microphone" : "microphone-outline"}
                size={24}
                color={
                  isRecording
                    ? "#ef4444"
                    : isFocus
                      ? APP_COLOR.BLUE
                      : APP_COLOR.GREY
                }
              />
            </TouchableOpacity>
          </View>

          {/* 2. Menu Chọn Danh Mục Xổ Nối Trực Tiếp Trong Khung Tạo Task */}
          {showCategoryMenu && (
            <View style={styles.inlineCategoryContainer}>
              <Text style={styles.menuTitle}>Chọn danh mục</Text>
              <View style={styles.categoryGrid}>
                {categoryOptions.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.categoryChip,
                      selectedCategory.id === item.id && styles.activeChip,
                    ]}
                    onPress={() => {
                      setSelectedCategory(item);
                      setShowCategoryMenu(false); // Thu gọn lại sau khi chọn xong
                    }}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selectedCategory.id === item.id &&
                          styles.activeChipText,
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* 3. Hàng công cụ phía dưới: Nút No Category ∨ và Nút Gửi */}
          <View style={styles.footerRow}>
            {/* Nút Chọn Danh Mục (No Category ∨) */}
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => setShowCategoryMenu(!showCategoryMenu)}
              activeOpacity={0.7}
            >
              <Text style={styles.categoryButtonText}>
                {selectedCategory.name}
              </Text>
              <Feather
                name={showCategoryMenu ? "chevron-up" : "chevron-down"}
                size={16}
                color="#6b7280"
              />
            </TouchableOpacity>

            {/* Nút Gửi / Tạo Task */}
            <TouchableOpacity
              style={styles.submitButton}
              disabled={!hasInput}
              onPress={handleCreateTask}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <MaterialIcons
                name="assistant-navigation"
                size={36}
                color={hasInput ? APP_COLOR.BLUE : APP_COLOR.GREY}
              />
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    backgroundColor: "#f8fafc",
    paddingRight: 8,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#0f172a",
  },
  microphoneIcon: {
    padding: 8,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
  },
  categoryButtonText: {
    fontSize: 14,
    color: "#475569",
    fontWeight: "500",
  },
  submitButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  // 🟡 Style cho Menu Chọn Danh Mục Inline (Nằm ngay bên trong khung Tạo Task)
  inlineCategoryContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    gap: 10,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
  },
  activeChip: {
    backgroundColor: "#e0edff",
  },
  chipText: {
    fontSize: 13,
    color: "#475569",
    fontWeight: "500",
  },
  activeChipText: {
    color: "#2563eb",
    fontWeight: "bold",
  },
});
