'use client';

import Card from '@/components/dashboard/Card';
import NestedMap from '@/components/dashboard/NestedMap';
import NestedTasks from '@/components/dashboard/NestedTasks';
import Statistic from '@/components/dashboard/Statistic';
import TaskCarousel from '@/components/dashboard/TaskCarousel';
import TaskOverview from '@/components/dashboard/TaskOverview';
import { demoList, TaskStatus, TaskType } from '@/types/common';
import {
  Clock, Moon, Pin, ThumbsUp,
} from '@geist-ui/icons';
import { useMemo } from 'react';

// todo: make this configurable
const TIME_OFF = 18;

function MainPanel() {
  const calculateHoursLeft = () => {
    const now = new Date();
    const currentHour = now.getHours();
    return TIME_OFF - currentHour >= 0 ? TIME_OFF - currentHour : 0;
  };

  const taskDone = useMemo(() => {
    // todo: filter out only today's task (at backend)
    const todaysTask = demoList.filter((task) => task.type === TaskType.AFT);
    const total = todaysTask.length;
    const done = todaysTask.filter((task) => task.status === TaskStatus.DONE).length;
    return Math.ceil(100 * (done / total));
  }, [demoList]);

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
          <TaskOverview taskList={demoList} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Afternoon Plan" taskList={demoList} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="After Work Plan" taskList={demoList} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Weekend Plan" taskList={demoList} />
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
          <TaskOverview taskList={demoList} />
        </Card>

        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Afternoon Plan" taskList={demoList} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="After Work Plan" taskList={demoList} />
        </Card>
        <Card custom="col-span-4 h-96" golive>
          <NestedTasks title="Weekend Plan" taskList={demoList} />
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
          <TaskOverview taskList={demoList} />
        </Card>
        <Card custom="h-96 w-full" golive>
          <TaskCarousel />
        </Card>
      </div>
    </>
  );
}

export default MainPanel;
