import { TaskImportance, TaskPriority, TaskStatus, TaskType } from "./common";

export interface CreateTaskRequest {
  userId: string,
  name: string,
  type: TaskType,
  status: TaskStatus,
  priority: TaskPriority
  importance: TaskImportance
  createdLocalTime: string,
  updatedLocalTime: string,
  description: string,
  timezone: string,
}

export interface UpdateTaskRequest {
  userId: string,
  name: string,
  status: TaskStatus,
  priority: TaskPriority
  importance: TaskImportance
  updatedLocalTime: string,
  description: string,
}