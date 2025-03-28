import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import { FileIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { TaskType } from '@/types/common';
import { PulsatingButton } from '../ui/magicui/pulsating-button';

interface Props {
  taskType: TaskType
}

function NoTask({ taskType }: Props) {
  const renderWording = () => {
    if (taskType === TaskType.AFT) return 'Today';
    if (taskType === TaskType.AFW) return 'After Work';
    if (taskType === TaskType.WKE) return 'At Weekend';
    return '';
  };
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <FileIcon className="h-10 w-10 2xl:h-12 2xl:w-12 text-neutral-700" />
        <div className="p-2 lg:p-4 text-neutral-700 text-lg lg:text-sm 2xl:text-lg text-center font-semibold">
          No Tasks
          {' '}
          {renderWording()}
        </div>
      </div>
      <Link href={MenuConfig[MenuTitle.PLANNER].href}>
        <PulsatingButton>Create One ?</PulsatingButton>
      </Link>
    </div>
  );
}

export default NoTask;
