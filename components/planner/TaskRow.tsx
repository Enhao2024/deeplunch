'use client';

import { Task, TaskImportance, TaskPriority } from '@/types/common';
import { ChevronDown, ChevronUp } from '@geist-ui/icons';
import {
  Box, Collapse, IconButton,
  TableCell,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import ManagePopOver from './ManagePopOver';

interface Props {
  row: Task,
  userId: string,
  onTaskUpdated: () => void,
}

function TaskRow({ row, userId, onTaskUpdated }: Props) {
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

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{renderImportance(row.importance)}</TableCell>
        <TableCell>{renderPriority(row.priority)}</TableCell>
        <TableCell>{row.createdLocalTime}</TableCell>
        <TableCell>{row.updatedLocalTime}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell align="center">
          <ManagePopOver task={row} userId={userId} onTaskUpdated={onTaskUpdated} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div className="mx-2 my-4 p-4 bg-gray-100 rounded-sm flex flex-col space-y-4 text-neutral-600">
                <div className="flex justify-start space-x-2">
                  <span className="font-semibold">Task ID: </span>
                  <span>{row.taskId}</span>
                </div>
                <div className="flex justify-start space-x-2">
                  <span className="font-semibold">Task Description: </span>
                  <span>{row.description}</span>
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TaskRow;
