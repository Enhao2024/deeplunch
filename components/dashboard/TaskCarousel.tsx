'use client';

import { Task, TaskType } from '@/types/common';
import NestedTasks from './NestedTasks';

interface Props {
  afternoonTasks: Task[],
  afterWorkTasks: Task[],
  weekendTasks: Task[],
}

function TaskCarousel({ afternoonTasks, afterWorkTasks, weekendTasks }: Props) {
  return (
    <div className="w-full carousel carousel-center rounded-box space-x-4 p-4">
      <div className="carousel-item w-full">
        <NestedTasks title="Afternoon Plan" taskList={afternoonTasks} taskType={TaskType.AFT} />
      </div>
      <div className="carousel-item w-full">
        <NestedTasks title="After Work Plan" taskList={afterWorkTasks} taskType={TaskType.AFW} />
      </div>
      <div className="carousel-item w-full">
        <NestedTasks title="Weekend Plan" taskList={weekendTasks} taskType={TaskType.WKE} />
      </div>
    </div>
  );
}

export default TaskCarousel;
