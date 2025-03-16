'use client';

import { useEffect, useState } from 'react';
import { BatteryCharging } from '@geist-ui/icons';
import { AnimatedCircularProgressBar } from '../ui/magicui/animated-circular-progress-bar';

function CircularProgress() {
  const [value, setValue] = useState(10);
  const [color, setColor] = useState<string>('red');

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 60) {
        setColor('red');
        return 10;
      }
      if (prev >= 40) {
        setColor('green');
      } else if (prev >= 20) {
        setColor('orange');
      } else if (prev >= 10) {
        setColor('red');
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={value}
      icon={<BatteryCharging size={32} />}
      gaugePrimaryColor={color}
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  );
}

export default CircularProgress;
