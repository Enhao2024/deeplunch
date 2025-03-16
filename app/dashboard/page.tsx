'use client';

import Card from '@/components/dashboard/Card';
import NestedMap from '@/components/dashboard/NestedMap';
import Statistic from '@/components/dashboard/Statistic';
import Entrance from '@/components/layout/Entrance';
import {
  Clock, Moon, Pin, ThumbsUp,
} from '@geist-ui/icons';

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
        <div className="col-span-8 h-[55vh] p-8">
          <NestedMap />
        </div>
        <Card custom="col-span-4 h-[55vh]" golive={false}>06</Card>
        <Card custom="col-span-4 h-64" golive={false}>07</Card>
        <Card custom="col-span-4 h-64" golive={false}>08</Card>
        <Card custom="col-span-4 h-64" golive={false}>09</Card>
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
        <div className="col-span-8 h-[60vh] p-4">
          <NestedMap />
        </div>
        <Card custom="col-span-4 h-[60vh]" golive={false}>06</Card>
        <Card custom="col-span-4 h-48 " golive={false}>07</Card>
        <Card custom="col-span-4 h-48 " golive={false}>08</Card>
        <Card custom="col-span-4 h-48 " golive={false}>09</Card>
      </div>

      {/* Mobile */}
      <div className="px-8 py-8 w-9/10 grid grid-cols-2 gap-y-4 lg:hidden">
        <Card custom="col-span-3 h-16 px-8" golive>
          <Statistic icon={<Pin size={32} />} title="Jobs Done" number={10} unit="%" />
        </Card>
        <Card custom="col-span-3 h-16 px-8" golive>
          <Statistic icon={<Moon size={32} />} title="Meditation" number={15} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-16 px-8" golive>
          <Statistic icon={<ThumbsUp size={32} />} title="Learning" number={20} unit="mins" />
        </Card>
        <Card custom="col-span-3 h-16 px-8" golive>
          <Statistic icon={<Clock size={32} />} title="Until Home" number={4} unit="hours" />
        </Card>
        <div className="col-span-2 h-[920px] p-4">
          <NestedMap />
        </div>
        <Card custom="col-span-2 h-[50vh]" golive={false}>06</Card>
        <Card custom="col-span-2 h-64" golive={false}>07</Card>
        <Card custom="col-span-2 h-64" golive={false}>08</Card>
        <Card custom="col-span-2 h-64" golive={false}>09</Card>
      </div>
    </Entrance>
  );
}
