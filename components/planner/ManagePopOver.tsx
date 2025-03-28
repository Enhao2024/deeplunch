import {
  Task,
} from '@/types/common';
import { UpdateTaskRequest } from '@/types/request';
import { getBaseAPIUrl } from '@/utils/GeneralUtils';
import {
  Button, IconButton, Popover, Tooltip,
} from '@mui/material';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useRef, useState } from 'react';
import UpdateTaskModal from './UpdateTaskModal';

interface Props {
  task: Task,
  userId: string,
  onTaskUpdated: () => void,
}

function ManagePopOver({ task, userId, onTaskUpdated }: Props) {
  const initRequest: UpdateTaskRequest = {
    userId,
    name: task.name,
    status: task.status,
    priority: task.priority,
    importance: task.importance,
    updatedLocalTime: task.updatedLocalTime,
    description: task.description,
  };

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [updateParams, setUpdateParams] = useState<UpdateTaskRequest>(initRequest);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setPopoverOpen((prev) => !prev);
  };

  const handleClose = () => {
    setPopoverOpen(false);
  };

  const popOverId = () => `popover-${task.taskId}`;

  const baseUrl = getBaseAPIUrl();

  const deleteTask = async () => {
    try {
      const url = `${baseUrl}/user/tasks/${task.taskId}?userId=${userId}`;
      await axios.delete(url).then(() => {
        onTaskUpdated();
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async () => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = DateTime.now().setZone(userTimezone).toFormat('yyyy-MM-dd HH:mm:ss');
    try {
      const url = `${baseUrl}/user/tasks/${task.taskId}`;
      const requestData: UpdateTaskRequest = {
        userId,
        name: updateParams.name,
        status: updateParams.status,
        priority: updateParams.priority,
        importance: updateParams.importance,
        updatedLocalTime: now,
        description: updateParams.description,
      };

      await axios.put(url, requestData).then(() => {
        onTaskUpdated();
      });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <>
      <Tooltip title="Manage">
        <IconButton
          ref={buttonRef}
          aria-describedby={popOverId()}
          onClick={handleClick}
        >
          <DotsHorizontalIcon />
        </IconButton>
      </Tooltip>

      <Popover
        id={popOverId()}
        open={popoverOpen}
        anchorEl={buttonRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className="m-2 p-2 flex flex-col space-y-2 justify-center items-center">
          <Button
            size="small"
            variant="text"
            onClick={() => {
              setModalOpen(true);
              setPopoverOpen(false);
            }}
          >
            Update Task
          </Button>
          <Button size="small" variant="text" color="error" onClick={() => deleteTask()}>
            Delete Task
          </Button>
        </div>
      </Popover>
      <UpdateTaskModal
        initParams={initRequest}
        openSatus={modalOpen}
        setOpen={(s) => setModalOpen(s)}
        onParamUpdate={(p) => setUpdateParams(p)}
        updateTask={updateTask}
      />
    </>
  );
}

export default ManagePopOver;
