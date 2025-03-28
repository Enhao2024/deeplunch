export interface Coordinate {
  lat: number,
  lng: number,
}

export interface Profile {
  name: string,
  picture: string,
  email: string,
}

export enum TaskType {
  AFT = "Afternoon Plan",
  AFW = "After Work Plan",
  WKE = "Weekend Plan",
}

export enum TaskPriority {
  URGENT = "Urgent",
  WAITABLE = "Waitable",
}

export enum TaskImportance {
  IMPORTANT = "Important",
  UNIMPORTANT = "Optional",
}

export enum TaskStatus {
  PENDING = "Pending",
  DOING = "Doing",
  DONE = "Done",
}


export interface Task {
  taskId: string,
  name: string,
  status: TaskStatus,
  description: string,
  createdLocalTime: string,
  updatedLocalTime: string,
  type: TaskType,
  priority: TaskPriority,
  importance: TaskImportance,
}

export const demoList: Task[] = [
  {
    name: "Buy myself a coffee",
    description: "des 1",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.URGENT,
    importance: TaskImportance.UNIMPORTANT,
    status: TaskStatus.DOING,
    updatedLocalTime: "",
    taskId: ""
  },
  {
    name: "Schedule a meeting with Max",
    description: "des 2",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.URGENT,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DONE,
    updatedLocalTime: "",
    taskId: ""
  },
  {
    name: "Take a break after 2 hours",
    description: "des 3",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.UNIMPORTANT,
    status: TaskStatus.PENDING,
    updatedLocalTime: "",
    taskId: ""
  },
  {
    name: "Learn Vercel",
    description: "des 4",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DONE,
    updatedLocalTime: "",
    taskId: ""
  },
  {
    name: "Learn AWS",
    description: "des 5",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DONE,
    updatedLocalTime: "",
    taskId: ""
  },
  {
    name: "Learn Linux",
    description: "des 6",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DOING,
    updatedLocalTime: "",
    taskId: ""
  },
  {
    name: "Learn Nextjs",
    description: "des 7",
    createdLocalTime: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DOING,
    updatedLocalTime: "",
    taskId: ""
  },
]
