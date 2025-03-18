'use client';

import { Task, TaskStatus } from '@/types/common';
import ListTask from './ListTask';

interface Props {
  taskList: Task[],
}

function TaskList({ taskList }: Props) {
  const sortedTasks = () => taskList.sort((a, b) => {
    const order = {
      [TaskStatus.DOING]: 1,
      [TaskStatus.PENDING]: 2,
      [TaskStatus.DONE]: 3,
    };

    return order[a.status] - order[b.status];
  });

  return sortedTasks().slice(0, 6).map((task) => (
    <ListTask task={task} />
  ));
}

export default TaskList;
