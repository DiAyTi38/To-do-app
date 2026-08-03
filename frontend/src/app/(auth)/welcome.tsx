import { APP_COLOR } from "@/hooks/constant";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import welcome from "@/assets/2678451fe712ac8a09913ef44d40877e.jpg";
import { router } from "expo-router";

const WelcomePage = () => {
  const styles = StyleSheet.create({
    circleBackground: {
      position: "absolute",
      right: 2, // Tùy chỉnh vị trí của vòng tròn lệch sang phải
      top: 6, // Tùy chỉnh vị trí lệch xuống dưới
      width: 20,
      height: 20,
      borderRadius: 12, // Bo tròn thành hình tròn
    },
    iconContainer: {
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40,
    },
  });
  return (
    <ImageBackground
      source={welcome}
      imageStyle={{ opacity: 0.4 }}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Chào mừng đến với{" "}
            </Text>
            <Text
              style={{
                color: APP_COLOR.BLUE,
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              To-do list
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              gap: 30,
              paddingRight: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View style={styles.iconContainer}>
                <View
                  style={[
                    styles.circleBackground,
                    { backgroundColor: "#a2defdff" },
                  ]}
                />
                <MaterialIcons name="task-alt" size={24} color="black" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>
                  Tạo tác vụ nhanh chóng và dễ dàng
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 400, color: "#555555" }}
                >
                  Nhiệm vụ đầu vào, nhiệm vụ con và nhiệm vụ lặp lại.
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View style={styles.iconContainer}>
                <View
                  style={[
                    styles.circleBackground,
                    { backgroundColor: "#fdde9fff" },
                  ]}
                />
                <MaterialIcons name="access-alarm" size={24} color="black" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>
                  Nhắc nhở công việc
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 400, color: "#555555" }}
                >
                  Đặt lời nhắc và không bao giờ bỏ lỡ những điều quan trọng
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.iconContainer}>
                <View
                  style={[
                    styles.circleBackground,
                    { backgroundColor: "#b7b7ffff" },
                  ]}
                />
                <MaterialIcons name="widgets" size={24} color="black" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>
                  Các tiện ích được cá nhân hoá
                </Text>
                <Text style={{ fontSize: 13, fontWeight: 400 }}>
                  Tạo widget và xem các công việc của bạn dễ dàng hơn
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.iconContainer}>
                <View
                  style={[
                    styles.circleBackground,
                    { backgroundColor: "#fdbafdff" },
                  ]}
                />
                <Ionicons name="shirt-outline" size={24} color="black" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: "black" }}>
                  Chủ đề tuỳ chỉnh
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 400, color: "#555555" }}
                >
                  Chọn chủ đề bạn thích và bắt đầu một ngày tuyệt vời của bạn
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Pressable
              style={({ pressed }) => ({
                backgroundColor:
                  pressed === false ? APP_COLOR.BLUE : "#a2defdff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                borderRadius: 25,
                paddingVertical: 15,
                alignSelf: "center",
                width: "90%",
              })}
              onPress={() => router.navigate("/(tabs)")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "700",
                  letterSpacing: 0.5,
                }}
              >
                TIẾP TỤC
              </Text>
              <View style={{ right: 20, position: "absolute" }}>
                <MaterialCommunityIcons
                  name="chevron-triple-right"
                  size={20}
                  color="white"
                />
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomePage;
