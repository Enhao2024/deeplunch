'use client';

import { Task } from '@/types/common';
import { Table } from '@geist-ui/core';
import {
  TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import TaskRow from './TaskRow';

interface Props {
  tasks: Task[],
  userId: string,
  onTaskUpdated: () => void,
}

function TaskTable({ tasks, userId, onTaskUpdated }: Props) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Task Name</TableCell>
              <TableCell>Importance</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center" sx={{ width: '100px' }}>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row) => (
              <TaskRow key={row.taskId} row={row} userId={userId} onTaskUpdated={onTaskUpdated} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TaskTable;
