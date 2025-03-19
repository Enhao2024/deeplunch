'use client';

import { demoList } from '@/types/common';
import NestedTasks from './NestedTasks';

function TaskCarousel() {
  return (
    <div className="w-full carousel carousel-center rounded-box space-x-4 p-4">
      <div className="carousel-item min-w-72">
        <NestedTasks title="Afternoon Plan" taskList={demoList} />
      </div>
      <div className="carousel-item min-w-72">
        <NestedTasks title="After Work Plan" taskList={demoList} />
      </div>
      <div className="carousel-item min-w-72">
        <NestedTasks title="Weekend Plan" taskList={demoList} />
      </div>
    </div>
  );
}

export default TaskCarousel;
