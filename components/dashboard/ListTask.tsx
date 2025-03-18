'use client';

import {
  Task, TaskImportance, TaskPriority, TaskStatus,
} from '@/types/common';
import {
  DoubleArrowUpIcon, DoubleArrowDownIcon, StarIcon, DrawingPinIcon, CheckCircledIcon, ClockIcon,
} from '@radix-ui/react-icons';
import { truncate } from '@/utils/GeneralUtils';
import { useState } from 'react';
import { Modal } from '@geist-ui/core';
import Link from 'next/link';
import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';

interface Props {
  task: Task,
}

function ListTask({ task }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const renderPriority = (priority: TaskPriority) => {
    if (priority === TaskPriority.URGENT) {
      return <div className="badge badge-error badge-sm 2xl:badge-md">{priority}</div>;
    }
    return <div className="badge badge-warning badge-sm 2xl:badge-md">{priority}</div>;
  };

  const renderImportance = (importance: TaskImportance) => {
    if (importance === TaskImportance.IMPORTANT) {
      return <div className="badge badge-error badge-sm 2xl:badge-md">{importance}</div>;
    }
    return <div className="badge badge-warning badge-sm 2xl:badge-md">{importance}</div>;
  };

  const renderIconPriority = (priority: TaskPriority) => {
    if (priority === TaskPriority.URGENT) {
      return <DoubleArrowUpIcon className="text-red-600" />;
    }
    return <DoubleArrowDownIcon className="text-blue-600" />;
  };

  const renderIconImportance = (importance: TaskImportance) => {
    if (importance === TaskImportance.IMPORTANT) {
      return <StarIcon className="text-red-600" />;
    }
    return <StarIcon className="text-blue-600" />;
  };

  const renderStatus = (status: TaskStatus) => {
    if (status === TaskStatus.DOING) {
      return <DrawingPinIcon className="text-blue-600" />;
    } if (status === TaskStatus.DONE) {
      return <CheckCircledIcon className="text-green-600" />;
    }
    return <ClockIcon className="text-orange-600" />;
  };

  return (
    <>
      <div
        className="my-2 py-2 px-3 bg-white hover:bg-gray-100 rounded-lg w-full grid grid-cols-9 shadow-md
                      justify-center items-center text-xs 2xl:text-sm text-neutral-700 font-semibold cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="col-span-6 2xl:col-span-4" title={`${task.name}: ${task.description}`}>{truncate(task.name, 20)}</div>
        <div className="hidden 2xl:block col-span-2 text-center">{renderImportance(task.importance)}</div>
        <div className="hidden 2xl:block col-span-2 text-center">{renderPriority(task.priority)}</div>
        <div className="2xl:hidden col-span-1 flex justify-center" title={task.importance}>{renderIconImportance(task.importance)}</div>
        <div className="2xl:hidden col-span-1 flex justify-center" title={task.priority}>{renderIconPriority(task.priority)}</div>
        <div className="col-span-1 flex justify-center" title={task.status}>{renderStatus(task.status)}</div>
      </div>
      <Modal visible={open} onClose={() => setOpen(false)}>
        <Modal.Title>{task.name}</Modal.Title>
        <Modal.Subtitle>{`${task.importance} & ${task.priority}`}</Modal.Subtitle>
        <Modal.Content>
          <p className="text-center">{task.description}</p>
        </Modal.Content>
        <Modal.Action placeholder onPointerEnterCapture onPointerLeaveCapture passive onClick={() => setOpen(false)}>Cancel</Modal.Action>
        <Modal.Action placeholder onPointerEnterCapture onPointerLeaveCapture>
          <Link href={MenuConfig[MenuTitle.PLANNER].href}>Manage</Link>
        </Modal.Action>
      </Modal>
    </>
  );
}

export default ListTask;
