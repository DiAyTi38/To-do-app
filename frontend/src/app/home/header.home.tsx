import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { APP_COLOR } from "@/hooks/constant";

type HeaderProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export const categories = [
  { id: "1", title: "Tất cả" },
  { id: "2", title: "Công việc" },
  { id: "3", title: "Cá nhân" },
  { id: "4", title: "Danh sách ưa thích" },
  { id: "5", title: "Ngày sinh nhật" },
];

const HeaderHome = ({ activeId, onSelect }: HeaderProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <View style={styles.headerContainer}>
      {/* 4. FlatList cuộn ngang chiếm phần không gian bên trái */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal={true} // Bật chế độ cuộn ngang
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn cho đẹp
        contentContainerStyle={{ gap: 10, paddingHorizontal: 15 }} // Khoảng cách giữa các nút
        style={{ flex: 1 }} // Giúp FlatList co giãn linh hoạt
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelect(item.id)}
            activeOpacity={0.8}
            style={[
              styles.pillButton,
              {
                backgroundColor:
                  item.id === activeId ? APP_COLOR.BLUE : APP_COLOR.GREY,
              },
            ]}
          >
            <Text
              style={[
                styles.pillText,
                { color: item.id === activeId ? "#ffffff" : "#6b7280" },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* 5. Nút Menu 3 chấm cố định ở bên phải */}
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => setMenuVisible(true)}
      >
        <MaterialCommunityIcons
          name="dots-vertical"
          size={24}
          color="#6b7280"
        />
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        transparent={true} // Giữ nền màn hình bên dưới
        animationType="fade" // Hiệu ứng xuất hiện nhẹ nhàng
        onRequestClose={() => setMenuVisible(false)}
      >
        {/* Lớp phủ màn hình: Bấm ra ngoài để đóng Menu */}
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.modalOverlay}>
            {/* Ngăn sự kiện bấm bên trong hộp Menu bị đóng */}
            <TouchableWithoutFeedback>
              <View style={styles.menuDropdown}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Chọn công việc</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Quản lý Danh mục</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Đánh giá hôm nay</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Tìm kiếm</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Sắp xếp công việc</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>In</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>
                    Hiện tại Công Việc Nhỏ
                  </Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Phản hồi</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    // Logic xử lý khi chọn Thêm danh mục
                  }}
                >
                  <Text style={styles.menuItemText}>Nâng cấp lên Pro</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#ffffff",
  },
  listContainer: {
    paddingHorizontal: 16,
    gap: 10,
  },
  pillButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pillText: {
    fontSize: 14,
    fontWeight: "500",
  },
  menuIcon: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Lớp nền tối mờ nhẹ
    justifyContent: "flex-start",
    alignItems: "flex-end", // Đẩy Hộp Menu về góc phải
    paddingTop: 105, // Khoảng cách từ mép trên màn hình xuống ngay dưới nút 3 chấm
    paddingRight: 16,
  },
  menuDropdown: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingVertical: 6,
    width: 200,
    // Hiệu ứng đổ bóng mượt trên iOS & Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  menuItemText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
  },
});
