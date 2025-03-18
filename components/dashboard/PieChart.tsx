'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: ['Doing', 'Pending', 'Done'],
  datasets: [
    {
      data: [2, 2, 3],
      backgroundColor: ['oklch(0.789 0.154 211.53)', 'oklch(0.828 0.189 84.429)', 'oklch(0.792 0.209 151.711)'],
      hoverBackgroundColor: ['oklch(0.609 0.126 221.723)', 'oklch(0.666 0.179 58.318)', 'oklch(0.627 0.194 149.214)'],
    },
  ],
};

function PieChart() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
      <div className="text-lg 2xl:text-2xl text-neutral-700 font-semibold">Today&apos;s Job Overview</div>
      <div className="w-3/4 h-3/4">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default PieChart;
