'use client';

import MainPanel from '@/components/dashboard/MainPanel';
import Entrance from '@/components/layout/Entrance';

export default function page() {
  return (
    <Entrance custom="">
      <MainPanel />
    </Entrance>
  );
}
