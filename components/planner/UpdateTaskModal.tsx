import { TaskImportance, TaskPriority, TaskStatus } from '@/types/common';
import { UpdateTaskRequest } from '@/types/request';
import { Modal } from '@geist-ui/core';
import { useEffect, useState } from 'react';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';

interface Props {
  initParams: UpdateTaskRequest,
  openSatus: boolean,
  onParamUpdate: (p: UpdateTaskRequest) => void,
  setOpen: (s: boolean) => void,
  updateTask: () => void,
}

function UpdateTaskModal({
  initParams, openSatus, onParamUpdate, updateTask, setOpen,
}: Props) {
  const [updateParams, setUpdateParams] = useState<UpdateTaskRequest>(initParams);

  useEffect(() => {
    onParamUpdate(updateParams);
  }, [updateParams]);

  return (
    <Modal visible={openSatus} onClose={() => setOpen(false)}>
      <Modal.Title>Update Task</Modal.Title>
      <Modal.Content>
        <div className="p-4 flex flex-col justify-center items-center space-y-4">
          <FieldInput
            defaultValue={initParams.name}
            placeholder="Task Name"
            limit={100}
            onUpdate={(v) => setUpdateParams({ ...updateParams, name: v })}
          />
          <FieldSelect
            defaultValue={initParams.importance}
            onUpdate={(e) => setUpdateParams({ ...updateParams, importance: e.target.value as TaskImportance })}
            placeholder="Importance"
            optionType={TaskImportance}
          />
          <FieldSelect
            defaultValue={initParams.priority}
            onUpdate={(e) => setUpdateParams({ ...updateParams, priority: e.target.value as TaskPriority })}
            placeholder="Priority"
            optionType={TaskPriority}
          />
          <FieldSelect
            defaultValue={initParams.status}
            onUpdate={(e) => setUpdateParams({ ...updateParams, status: e.target.value as TaskStatus })}
            placeholder="Status"
            optionType={TaskStatus}
          />
          <FieldInput
            rows={5}
            defaultValue={initParams.description}
            placeholder="Description"
            onUpdate={(v) => setUpdateParams({ ...updateParams, description: v })}
            limit={200}
          />
        </div>
      </Modal.Content>
      <Modal.Action placeholder onPointerEnterCapture onPointerLeaveCapture passive onClick={() => setOpen(false)}>Cancel</Modal.Action>
      <Modal.Action
        placeholder
        onPointerEnterCapture
        onPointerLeaveCapture
        onClick={() => {
          updateTask();
          setOpen(false);
        }}
      >
        Update
      </Modal.Action>
    </Modal>
  );
}

export default UpdateTaskModal;
