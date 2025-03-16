/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { RandomProvider } from '@/constants/Providers';
import { DevConfig } from '@/utils/DevConfig';
import { inDevelopment } from '@/utils/GeneralUtils';
import {
  getHours, getMinutes, getSeconds, isVisitedToday, setHours, setMinutes, setSeconds, setVisitedToday,
} from '@/utils/localStorage';
import { NON_FUNCTIONAL_PAGE } from '@/utils/MenuConfig';
import { REDIRECT_SEC } from '@/utils/VercelEnv';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  fontSize: string,
  title: string,
  customize: string,
}

function Timer({ title, fontSize, customize }: Props) {
  const pathName = usePathname();
  const isNonFunctionalPage = NON_FUNCTIONAL_PAGE.reduce((acc, menu) => acc || menu?.href === pathName, false);

  if (isNonFunctionalPage) {
    return null;
  }
  const router = useRouter();

  useEffect(() => {
    setVisitedToday();
  }, []);

  const getRemainSeconds = () => {
    if (inDevelopment()) {
      return DevConfig.resetSeconds;
    }
    if (!isVisitedToday()) {
      const remainHours = REDIRECT_SEC / 3600;
      const remainMinutes = (REDIRECT_SEC / 60) % 60;
      const remainSeconds = REDIRECT_SEC % 60;
      setHours(remainHours);
      setMinutes(remainMinutes);
      setSeconds(remainSeconds);
    }
    return getHours() * 3600 + getMinutes() * 60 + getSeconds();
  };

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + getRemainSeconds());

  const {
    seconds,
    minutes,
    hours,
  } = useTimer({ expiryTimestamp, onExpire: () => router.push(RandomProvider()) });

  useEffect(() => {
    if (seconds !== undefined) setSeconds(seconds);
  }, [seconds]);
  useEffect(() => {
    if (minutes !== undefined) setMinutes(minutes);
  }, [minutes]);

  useEffect(() => {
    if (hours !== undefined) setHours(hours);
  }, [hours]);

  return (
    <div className={`tooltip ${customize}`} style={{ textAlign: 'center' }} data-tip={title}>
      <div className="bg-slate-50 rounded-md px-2 flex justify-evenly items-center space-x-2" style={{ fontSize }}>
        <div className="">
          <span>{hours}</span>
          :
          <span>{minutes}</span>
          :
          <span>{seconds}</span>
        </div>
        <div className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d={`M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 
                0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`}
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Timer;
