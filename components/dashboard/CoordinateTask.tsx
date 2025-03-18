'use client';

import { Task } from '@/types/common';
import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import { Modal } from '@geist-ui/core';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  color: string,
  task: Task,
}

function CoordinateTask({ color, task }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`p-2 rounded-full cursor-pointer shadow-xl ${color}`}
        title={`${task.name}: ${task.description}`}
        onClick={() => setOpen(true)}
      >
        {task.name.substring(0, 3).toUpperCase()}
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

export default CoordinateTask;
