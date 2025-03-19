'use client';

import Card from '@/components/dashboard/Card';
import NestedTasks from '@/components/dashboard/NestedTasks';
import NestedMap from '@/components/dashboard/NestedMap';
import Statistic from '@/components/dashboard/Statistic';
import Entrance from '@/components/layout/Entrance';
import { demoList } from '@/types/common';
import {
  Clock, Moon, Pin, ThumbsUp,
} from '@geist-ui/icons';
import PieChartDemo from '@/components/dashboard/PieChart';
import TaskCarousel from '@/components/dashboard/TaskCarousel';

export default function page() {
  return (
    <Entrance custom="">
      {/* PC large */}
      <div className="px-16 py-8 w-9/10 hidden 2xl:grid grid-cols-12 gap-4">
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<Pin size={48} />} title="Jobs Done" number={10} unit="%" />
        </Card>
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<Moon size={48} />} title="Meditation" number={15} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<ThumbsUp size={48} />} title="Learning" number={20} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-32" golive>
          <Statistic icon={<Clock size={48} />} title="Until Home" number={4} unit="hours" />
        </Card>
        <div className="col-span-8 h-[55vh] p-8 flex flex-col justify-center">
          <NestedMap />
        </div>
        <Card custom="col-span-4 h-[55vh]" golive>
          <PieChartDemo />
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
          <Statistic icon={<Pin size={36} />} title="Jobs Done" number={10} unit="%" />
        </Card>
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<Moon size={36} />} title="Meditation" number={15} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<ThumbsUp size={36} />} title="Learning" number={20} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-24" golive>
          <Statistic icon={<Clock size={36} />} title="Until Home" number={4} unit="hours" />
        </Card>
        <div className="col-span-8 h-[58vh] p-4 flex flex-col justify-center">
          <NestedMap />
        </div>
        <Card custom="col-span-4 h-[58vh]" golive>
          <PieChartDemo />
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
        <Card custom="h-68 px-8 flex flex-col space-y-4 justify-center items-start" golive>
          <div className="w-full pb-2 text-left text-2xl font-semibold text-neutral-700">🚀 Overview</div>
          <Statistic icon={<Pin size={28} />} title="Jobs Done" number={10} unit="%" />
          <Statistic icon={<Moon size={28} />} title="Meditation" number={15} unit="mins" />
          <Statistic icon={<ThumbsUp size={28} />} title="Learning" number={20} unit="mins" />
          <Statistic icon={<Clock size={28} />} title="Until Home" number={4} unit="hours" />
        </Card>
        <div className="p-4">
          <NestedMap />
        </div>
        <Card custom="py-8" golive>
          <PieChartDemo />
        </Card>
        <Card custom="h-96 w-full" golive>
          <TaskCarousel />
        </Card>
      </div>
    </Entrance>
  );
}
