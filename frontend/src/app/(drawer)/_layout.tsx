import { Drawer } from "expo-router/drawer";
import { Image, View } from "react-native";
import drawer from "@/assets/09b78ba23211919b00ca097acbce7343.jpg";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <View style={{ height: 170, width: "100%", marginBottom: 10 }}>
        <Image
          source={drawer}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      initialRouteName="(tabs)"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* 1. Màn BottomTabs: Đặt làm màn mặc định nhưng HẤN KHỎI MENU DRAWER */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: "none" }, // 👈 Ẩn (tabs) khỏi danh sách menu Drawer
        }}
      />

      {/* 2. Các màn hình xuất hiện trong menu danh sách của Drawer */}
      <Drawer.Screen
        name="up-pro"
        options={{
          drawerLabel: "Nâng cấp lên Pro",
          title: "Nâng cấp Pro",
        }}
      />
      <Drawer.Screen
        name="star-task"
        options={{
          drawerLabel: "Star Task",
          title: "Star Task",
        }}
      />
      <Drawer.Screen
        name="type"
        options={{
          drawerLabel: "Thể loại",
          title: "Thể loại",
        }}
      />
      <Drawer.Screen
        name="theme"
        options={{
          drawerLabel: "Chủ đề",
          title: "Chủ đề",
        }}
      />
      <Drawer.Screen
        name="widget"
        options={{
          drawerLabel: "Tiện ích",
          title: "Tiện ích",
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          drawerLabel: "Hỏi đáp",
          title: "Hỏi đáp",
        }}
      />
      <Drawer.Screen
        name="feedback"
        options={{
          drawerLabel: "Phản hồi",
          title: "Phản hồi",
        }}
      />
      <Drawer.Screen
        name="follow-us"
        options={{
          drawerLabel: "Theo dõi chúng tôi",
          title: "Theo dõi chúng tôi",
        }}
      />
      <Drawer.Screen
        name="donate"
        options={{
          drawerLabel: "Quyên góp",
          title: "Quyên góp",
        }}
      />
      <Drawer.Screen
        name="family-apps"
        options={{
          drawerLabel: "Ứng dụng gia đình",
          title: "Ứng dụng gia đình",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Setting",
          title: "Setting",
        }}
      />
    </Drawer>
  );
}
