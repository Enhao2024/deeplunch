import {
  TaskImportance, TaskPriority, TaskStatus, TaskType,
} from '@/types/common';
import { CreateTaskRequest } from '@/types/request';
import { Modal } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';

const initRequest: CreateTaskRequest = {
  userId: '',
  name: '',
  type: TaskType.AFT,
  status: TaskStatus.PENDING,
  priority: TaskPriority.URGENT,
  importance: TaskImportance.IMPORTANT,
  createdLocalTime: '',
  updatedLocalTime: '',
  description: '',
  timezone: '',
};

interface Props {
  openSatus: boolean,
  onParamUpdate: (p: CreateTaskRequest) => void,
  createTask: () => void,
  setOpen: (s: boolean) => void,
}

function CreateTaskModal({
  openSatus, onParamUpdate, createTask, setOpen,
}: Props) {
  const [createParams, setCreatParams] = useState<CreateTaskRequest>(initRequest);

  useEffect(() => {
    onParamUpdate(createParams);
  }, [createParams]);

  return (
    <Modal visible={openSatus} onClose={() => setOpen(false)}>
      <Modal.Title>Create Task</Modal.Title>
      <Modal.Content>
        <div className="p-4 flex flex-col justify-center items-center space-y-4">
          <FieldInput
            limit={100}
            placeholder="Task Name"
            onUpdate={(v) => setCreatParams({ ...createParams, name: v })}
          />
          <FieldSelect
            onUpdate={(e) => setCreatParams({ ...createParams, type: e.target.value as TaskType })}
            placeholder="Task Type"
            optionType={TaskType}
          />
          <FieldSelect
            onUpdate={(e) => setCreatParams({ ...createParams, importance: e.target.value as TaskImportance })}
            placeholder="Importance"
            optionType={TaskImportance}
          />
          <FieldSelect
            onUpdate={(e) => setCreatParams({ ...createParams, priority: e.target.value as TaskPriority })}
            placeholder="Priority"
            optionType={TaskPriority}
          />
          <FieldSelect
            onUpdate={(e) => setCreatParams({ ...createParams, status: e.target.value as TaskStatus })}
            placeholder="Status"
            optionType={TaskStatus}
          />
          <FieldInput
            limit={200}
            rows={5}
            placeholder="Description"
            onUpdate={(v) => setCreatParams({ ...createParams, description: v })}
          />
        </div>
      </Modal.Content>
      <Modal.Action placeholder onPointerEnterCapture onPointerLeaveCapture passive onClick={() => setOpen(false)}>Cancel</Modal.Action>
      <Modal.Action
        placeholder
        onPointerEnterCapture
        onPointerLeaveCapture
        onClick={() => {
          createTask();
          setOpen(false);
        }}
      >
        Create
      </Modal.Action>
    </Modal>
  );
}

export default CreateTaskModal;
