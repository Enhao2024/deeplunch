'use client';

import { Task } from '@/types/common';
import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import { GridIcon, ListBulletIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';
import TaskCoordinate from './TaskCoordinate';
import TaskList from './TaskList';

interface Props {
  title: string;
  taskList: Task[];
}

function NestedTasks({ title, taskList }: Props) {
  const [grid, setGrid] = useState<boolean>(false);

  const renderTaskView = () => {
    if (grid) return <TaskCoordinate taskList={taskList} />;
    return <TaskList taskList={taskList} />;
  };

  const renderViewButton = () => {
    if (grid) {
      return (
        <div
          className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100"
          onClick={() => { setGrid(false); }}
        >
          <ListBulletIcon className="h-5 w-5" />
        </div>
      );
    }
    return (
      <div
        className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100"
        onClick={() => { setGrid(true); }}
      >
        <GridIcon className="h-5 w-5" />
      </div>
    );
  };

  return (
    <div className="w-full h-full grid grid-rows-10">
      <div className="row-span-2 px-2 flex justify-between items-center">
        <div className="text-neutral-700 text-xl lg:text-base 2xl:text-xl font-bold">{title}</div>
        <div className="flex justify-center items-center space-x-4">
          <div className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100">
            <Link href={MenuConfig[MenuTitle.PLANNER].href}>
              <MixerHorizontalIcon className="h-5 w-5" />
            </Link>
          </div>
          {renderViewButton()}
        </div>
      </div>
      <div className="row-span-8">
        {renderTaskView()}
      </div>
    </div>
  );
}

export default NestedTasks;
