'use client';

import {
  Task, TaskImportance, TaskPriority, TaskStatus,
} from '@/types/common';
import CoordinateTask from './CoordinateTask';

interface Props {
  taskList: Task[]
}

function TaskCoordinate({ taskList }: Props) {
  const renderTasks = (priority: TaskPriority, importance: TaskImportance, color: string) => taskList.filter((task) => task.status !== TaskStatus.DONE
    && task.priority === priority
    && task.importance === importance).map((task) => <CoordinateTask color={color} task={task} />).slice(0, 4);

  return (
    <div className="relative w-7/8 max-w-lg h-64 shadow-lg rounded-lg text-xs">
      {/* coordinates */}
      <div className="absolute top-1/2 left-0 w-full border-t-8 border-black" />
      <div className="absolute left-1/2 top-0 h-full border-l-8 border-black" />

      {/* data */}
      <div className="p-2 absolute top-0 left-0 w-1/2 h-1/2 flex flex-wrap items-center justify-center bg-red-200 space-x-2">
        {renderTasks(TaskPriority.URGENT, TaskImportance.IMPORTANT, 'bg-red-600')}
      </div>
      <div className="p-2 absolute top-0 right-0 w-1/2 h-1/2 flex flex-wrap items-center justify-center bg-blue-200 space-x-2">
        {renderTasks(TaskPriority.WAITABLE, TaskImportance.IMPORTANT, 'bg-sky-600')}
      </div>
      <div className="p-2 absolute bottom-0 left-0 w-1/2 h-1/2 flex flex-wrap items-center justify-center bg-yellow-200 space-x-2">
        {renderTasks(TaskPriority.URGENT, TaskImportance.UNIMPORTANT, 'bg-orange-600')}
      </div>
      <div className="p-2 absolute bottom-0 right-0 w-1/2 h-1/2 flex flex-wrap items-center justify-center bg-green-200 space-x-2">
        {renderTasks(TaskPriority.WAITABLE, TaskImportance.UNIMPORTANT, 'bg-green-600')}
      </div>

      {/* labels */}
      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 text-sm font-bold">{TaskImportance.IMPORTANT}</div>
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-sm font-bold">{TaskImportance.UNIMPORTANT}</div>
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-sm font-bold">{TaskPriority.URGENT}</div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 text-sm font-bold">{TaskPriority.WAITABLE}</div>
    </div>
  );
}

export default TaskCoordinate;
