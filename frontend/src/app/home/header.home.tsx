import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type HeaderProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

const categories = [
  { id: "1", title: "Tất cả" },
  { id: "2", title: "Công việc" },
  { id: "3", title: "Cá nhân" },
  { id: "4", title: "Danh sách ưa thích" },
  { id: "5", title: "Ngày sinh nhật" },
];

const HeaderHome = ({ activeId, onSelect }: HeaderProps) => {
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
                backgroundColor: item.id === activeId ? "#609af8" : "#e6f0fa",
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
      <TouchableOpacity style={styles.menuIcon}>
        <Entypo name="dots-three-vertical" size={20} color="#6b7280" />
      </TouchableOpacity>
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
});
