import { ReactNode } from 'react';

import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import {
  LockClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  golive: boolean;
  custom?: string;
}

function Card({ children, custom = '', golive }: Props) {
  if (golive) {
    return (
      <div className={['p-4 lg:p-8 flex justify-start items-center bg-gray-100 shadow-md rounded-2xl hover:bg-gray-200', custom].join(' ')}>
        {children}
      </div>
    );
  }
  return (

    <div className={['relative p-8 bg-gray-100 shadow-md rounded-2xl hover:bg-gray-200',
      'flex justify-center items-center space-y-4', custom].join(' ')}
    >
      <Link href={MenuConfig[MenuTitle.ROADMAP].href}>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <LockClosedIcon className="h-10 w-10 lg:h-12 lg:w-12 text-neutral-700" />
          <div className="p-2 lg:p-4 text-neutral-700 text-base text-center font-semibold">
            Coming Soon..
          </div>
        </div>
      </Link>
    </div>

  );
}

export default Card;
