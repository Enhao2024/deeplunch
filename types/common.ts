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
  AFT = "Afternoon_Plan",
  AFW = "After_Work_Plan",
  WKE = "Weekend_Plan",
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
  name: string,
  status: TaskStatus,
  description: string,
  createdDate: string,
  type: TaskType,
  priority: TaskPriority,
  importance: TaskImportance,
}

export const demoList: Task[] = [
  {
    name: "Buy myself a coffee",
    description: "des 1",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.URGENT,
    importance: TaskImportance.UNIMPORTANT,
    status: TaskStatus.DOING
  },
  {
    name: "Schedule a meeting with Max",
    description: "des 2",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.URGENT,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DONE
  },
  {
    name: "Take a break after 2 hours",
    description: "des 3",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.UNIMPORTANT,
    status: TaskStatus.PENDING
  },
  {
    name: "Learn Vercel",
    description: "des 4",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DONE
  },
  {
    name: "Learn AWS",
    description: "des 5",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DONE
  },
  {
    name: "Learn Linux",
    description: "des 6",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DOING
  },
  {
    name: "Learn Nextjs",
    description: "des 7",
    createdDate: "2025-1-23",
    type: TaskType.AFT,
    priority: TaskPriority.WAITABLE,
    importance: TaskImportance.IMPORTANT,
    status: TaskStatus.DOING
  },
]
