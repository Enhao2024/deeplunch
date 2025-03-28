'use client';

import Card from '@/components/dashboard/Card';
import NestedMap from '@/components/dashboard/NestedMap';
import NestedTasks from '@/components/dashboard/NestedTasks';
import Statistic from '@/components/dashboard/Statistic';
import TaskCarousel from '@/components/dashboard/TaskCarousel';
import TaskOverview from '@/components/dashboard/TaskOverview';
import {
  Profile, Task, TaskStatus, TaskType,
} from '@/types/common';
import { getBaseAPIUrl, getProfile } from '@/utils/GeneralUtils';
import {
  Clock, Moon, Pin, ThumbsUp,
} from '@geist-ui/icons';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useMemo, useState } from 'react';

// todo: make this configurable
const TIME_OFF = 18;

function MainPanel() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = Cookies.get('id_token');
    const userProfile = getProfile(token);
    setProfile(userProfile);
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const baseUrl = getBaseAPIUrl();
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

    if (profile) {
      fetchTasks();
    }
  }, [profile]);

  const calculateHoursLeft = () => {
    const now = new Date();
    const currentHour = now.getHours();
    return TIME_OFF - currentHour >= 0 ? TIME_OFF - currentHour : 0;
  };

  const afternoonTasks = useMemo(() => tasks.filter((task) => task.type === TaskType.AFT), [tasks]);

  const afterWorkTasks = useMemo(() => tasks.filter((task) => task.type === TaskType.AFW), [tasks]);

  const weekendTasks = useMemo(() => tasks.filter((task) => task.type === TaskType.WKE), [tasks]);

  const taskDone = useMemo(() => {
    const total = afternoonTasks.length;
    if (total === 0) return 0;
    const done = afternoonTasks.filter((task) => task.status === TaskStatus.DONE).length;
    return Math.ceil(100 * (done / total));
  }, [tasks]);

  return (
    <>
      {/* PC large */}
      <div className="px-16 py-8 w-9/10 hidden 2xl:grid grid-cols-12 gap-4">
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<Pin size={48} />} title="Jobs Done" number={taskDone} unit="%" />
        </Card>
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<Moon size={48} />} title="Meditation" number={0} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<ThumbsUp size={48} />} title="Learning" number={0} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<Clock size={48} />} title="Till Off" number={calculateHoursLeft()} unit="hours" />
        </Card>
        <div className="col-span-8 h-[55vh] p-8 flex flex-col justify-center">
          <NestedMap />
        </div>
        <Card custom="col-span-4 h-[55vh]" golive>
          <TaskOverview taskList={afternoonTasks} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Afternoon Plan" taskList={afternoonTasks} taskType={TaskType.AFT} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="After Work Plan" taskList={afterWorkTasks} taskType={TaskType.AFW} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Weekend Plan" taskList={weekendTasks} taskType={TaskType.WKE} />
        </Card>
      </div>

      {/* PC small */}
      <div className="px-16 py-8 w-9/10 hidden lg:grid 2xl:hidden grid-cols-12 gap-4">
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<Pin size={36} />} title="Jobs Done" number={taskDone} unit="%" />
        </Card>
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<Moon size={36} />} title="Meditation" number={0} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<ThumbsUp size={36} />} title="Learning" number={0} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<Clock size={36} />} title="Till Off" number={calculateHoursLeft()} unit="hours" />
        </Card>
        <div className="col-span-8 h-[58vh] p-4 flex flex-col justify-center">
          <NestedMap />
        </div>
        <Card custom="col-span-4 h-[58vh]" golive>
          <TaskOverview taskList={tasks} />
        </Card>

        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Afternoon Plan" taskList={afternoonTasks} taskType={TaskType.AFT} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="After Work Plan" taskList={afterWorkTasks} taskType={TaskType.AFW} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Weekend Plan" taskList={weekendTasks} taskType={TaskType.WKE} />
        </Card>
      </div>

      {/* Mobile */}
      <div className="px-8 py-8 w-9/10 flex flex-col space-y-4 lg:hidden">
        <Card custom="h-56 px-8 flex flex-col space-y-4 justify-center items-start" golive>
          <Statistic icon={<Pin size={28} />} title="Jobs Done" number={taskDone} unit="%" />
          <Statistic icon={<Moon size={28} />} title="Meditation" number={0} unit="mins" />
          <Statistic icon={<ThumbsUp size={28} />} title="Learning" number={0} unit="mins" />
          <Statistic icon={<Clock size={28} />} title="Till Off" number={calculateHoursLeft()} unit="hours" />
        </Card>
        <div className="p-4">
          <NestedMap />
        </div>
        <Card custom="py-8" golive>
          <TaskOverview taskList={tasks} />
        </Card>
        <Card custom="h-96 w-full" golive>
          <TaskCarousel afternoonTasks={afternoonTasks} afterWorkTasks={afterWorkTasks} weekendTasks={weekendTasks} />
        </Card>
      </div>
    </>
  );
}

export default MainPanel;
