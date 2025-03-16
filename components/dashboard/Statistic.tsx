import { ReactNode } from 'react';

interface Props {
  icon: ReactNode,
  title: string,
  number: number,
  unit: string,
}

function Statistic({
  icon, title, number, unit,
}: Props) {
  return (
    <div className="flex justify-start items-center space-x-6 2xl:space-x-8">
      <div className="text-neutral-700">{icon}</div>
      <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start space-x-2 lg:space-x-0">
        <p className="font-semibold text-xl 2xl:text-2xl">
          <span>{number}</span>
          {' '}
          <span>{unit}</span>
        </p>
        <p className="text-sm 2xl:text-base">{title}</p>
      </div>
    </div>
  );
}

export default Statistic;
