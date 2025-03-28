'use client';

import { Task, TaskType } from '@/types/common';
import {
  PieChartIcon, TextAlignLeftIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';
import NoTask from './NoTask';
import TaskPieChart from './TaskPieChart';
import TaskProgress from './TaskProgress';

interface Props {
  taskList: Task[]
}

function TaskOverview({ taskList }: Props) {
  const [pie, setPie] = useState<boolean>(true);
  const now = new Date();

  const renderTaskView = () => {
    if (pie) return <TaskPieChart taskList={taskList} />;
    return <TaskProgress taskList={taskList} />;
  };

  const renderViewButton = () => {
    if (pie) {
      return (
        <div
          className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100"
          onClick={() => { setPie(false); }}
        >
          <TextAlignLeftIcon className="h-4 w-4 2xl:h-5 2xl:w-5" />
        </div>
      );
    }
    return (
      <div
        className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100"
        onClick={() => { setPie(true); }}
      >
        <PieChartIcon className="h-4 w-4 2xl:h-5 2xl:w-5" />
      </div>
    );
  };

  if (!taskList || taskList.length === 0) {
    return <NoTask taskType={TaskType.AFT} />;
  }

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center space-y-4">
      <div className="absolute right-1 -top-1 lg:-right-4 lg:-top-4">
        {renderViewButton()}
      </div>
      <div className="flex flex-col justify-center items-center space-y-1">
        <div className="text-lg 2xl:text-2xl text-neutral-700 font-bold">Task Overview</div>
        <div className="text-sm 2xl:text-lg text-neutral-700 font-semibold">{now.toLocaleDateString()}</div>
      </div>
      {renderTaskView()}
    </div>
  );
}

export default TaskOverview;
