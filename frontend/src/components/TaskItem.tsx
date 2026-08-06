import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTasks } from "@/context/taskcontext";
import { Task } from "@/types/task";
import { APP_COLOR } from "@/hooks/constant";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTask, toggleImportant, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      {/* 1. Ô Tích hoàn thành (Checkbox) */}
      <TouchableOpacity
        onPress={() => toggleTask(task.id)}
        style={styles.iconBtn}
      >
        <MaterialIcons
          name={task.isCompleted ? "check-box" : "check-box-outline-blank"}
          size={24}
          color={task.isCompleted ? APP_COLOR.BLUE : "#9ca3af"}
        />
      </TouchableOpacity>

      {/* 2. Tiêu đề công việc (Gạch ngang chữ khi đã xong) */}
      <Text style={[styles.title, task.isCompleted && styles.completedTitle]}>
        {task.title}
      </Text>

      {/* 3. Nút Ngôi Sao Đánh Dấu Quan Trọng */}
      <TouchableOpacity
        onPress={() => toggleImportant(task.id)}
        style={styles.iconBtn}
      >
        <FontAwesome
          name={task.isImportant ? "star" : "star-o"}
          size={20}
          color={task.isImportant ? "#eab308" : "#cbd5e1"}
        />
      </TouchableOpacity>

      {/* 4. Nút Xóa Task */}
      <TouchableOpacity
        onPress={() => deleteTask(task.id)}
        style={styles.iconBtn}
      >
        <AntDesign name="delete" size={18} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 5,
    // Đổ bóng mượt nhẹ
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  iconBtn: {
    padding: 4,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
    marginLeft: 10,
    marginRight: 10,
  },
  // Style gạch ngang chữ và làm mờ khi task đã hoàn thành
  completedTitle: {
    textDecorationLine: "line-through",
    color: "#94a3b8",
  },
});
