export interface Task {
  id: string;
  title: string;
  note?: string;
  categoryId: string;
  isImportant: boolean;
  isCompleted: boolean;
  dueDate?: string;
  createdAt: number;
}
