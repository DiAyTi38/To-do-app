import { Task } from "@/types/task";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, categoryId: string, isImportant?: boolean) => void;
  toggleTask: (id: string) => void;
  toggleImportant: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@app_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("@app_tasks");
      if (savedTasks) setTasks(JSON.parse(savedTasks));
    } catch (e) {
      console.error("Lỗi khi tải tasks: ", e);
    }
  };

  const addTask = (
    title: string,
    categoryId: string = "1",
    isImportant: boolean = false,
  ) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      categoryId,
      isImportant,
      isCompleted: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };

  const toggleImportant = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isImportant: !t.isImportant } : t,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, toggleImportant, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks phải được dùng trong TaskProvider");
  return context;
};
