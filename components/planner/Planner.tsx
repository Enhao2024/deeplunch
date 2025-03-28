'use client';

import {
  Profile, Task, TaskImportance, TaskPriority, TaskStatus, TaskType,
} from '@/types/common';
import { CreateTaskRequest } from '@/types/request';
import { getBaseAPIUrl, getProfile } from '@/utils/GeneralUtils';
import axios from 'axios';
import Cookies from 'js-cookie';
import { DateTime } from 'luxon';
import { useEffect, useMemo, useState } from 'react';
import { PulsatingButton } from '../ui/magicui/pulsating-button';
import CreateTaskModal from './CreateTaskModal';
import TaskTable from './TaskTable';

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

function Planner() {
  const baseUrl = getBaseAPIUrl();

  const [taskType, setType] = useState<TaskType>(TaskType.AFT);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [createParams, setCreatParams] = useState<CreateTaskRequest>(initRequest);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get('id_token');
    const userProfile = getProfile(token);
    setProfile(userProfile);
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/tasks`, {
        params: { userId: profile?.email },
      });
      const taskList = response.data.tasks.map(({
        taskId,
        name,
        status,
        description,
        createdLocalTime,
        updatedLocalTime,
        type,
        priority,
        importance,
      }: Task) => ({
        taskId,
        name,
        status,
        description,
        createdLocalTime,
        updatedLocalTime,
        type,
        priority,
        importance,
      }));
      setTasks(taskList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (profile) fetchTasks();
  }, [profile]);

  const filteredTasks = useMemo(() => tasks.filter((task) => task.type === taskType), [tasks, taskType]);

  const createTask = async () => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = DateTime.now().setZone(userTimezone).toFormat('yyyy-MM-dd HH:mm:ss');

    if (profile && profile.email) {
      try {
        const requestData: CreateTaskRequest = {
          userId: profile.email,
          name: createParams.name,
          type: createParams.type,
          status: createParams.status,
          priority: createParams.priority,
          importance: createParams.importance,
          createdLocalTime: now,
          updatedLocalTime: now,
          description: createParams.description,
          timezone: userTimezone,
        };

        await axios.post(`${baseUrl}/user/tasks`, requestData).then(async () => {
          await fetchTasks();
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (!profile || !profile.email) return null;

  return (
    <div className="flex flex-col space-y-8 justify-center items-start">
      <div className="w-full flex flex-col-reverse space-y-reverse space-y-8 lg:space-y-0 lg:flex-row justify-between">
        <select
          className="select rounded-lg border-2 border-gray-300"
          defaultValue={taskType}
          onChange={(e) => { setType(e.target.value as TaskType); }}
        >
          <option value={TaskType.AFT}>Afternoon Tasks</option>
          <option value={TaskType.AFW}>After Work Tasks</option>
          <option value={TaskType.WKE}>Weekend Plans</option>
        </select>
        <PulsatingButton onClick={() => setModalOpen(true)}>Create Task</PulsatingButton>
        <CreateTaskModal
          openSatus={modalOpen}
          onParamUpdate={(p) => setCreatParams(p)}
          createTask={createTask}
          setOpen={(s) => setModalOpen(s)}
        />
      </div>
      <div className="w-full">
        <TaskTable tasks={filteredTasks} userId={profile.email} onTaskUpdated={fetchTasks} />
      </div>
    </div>
  );
}

export default Planner;
