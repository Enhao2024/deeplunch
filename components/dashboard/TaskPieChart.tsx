'use client';

import { Task, TaskStatus } from '@/types/common';
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 10,
          weight: 600,
        },
        color: '#333',
        boxWidth: 25,
      },
    },
    datalabels: {
      color: '#fff',
      font: {
        size: 14,
        weight: 600,
      },
      textStrokeColor: 'transparent',
      textStrokeWidth: 0,
    },
  },
};

interface Props {
  taskList: Task[],
}

function TaskPieChart({ taskList }: Props) {
  const data = useMemo(() => {
    let taskInProgress = 0;
    let taskPending = 0;
    let taskDone = 0;

    taskList.forEach((task) => {
      taskInProgress += task.status === TaskStatus.DOING ? 1 : 0;
      taskPending += task.status === TaskStatus.PENDING ? 1 : 0;
      taskDone += task.status === TaskStatus.DONE ? 1 : 0;
    });

    return {
      labels: ['Doing', 'Pending', 'Done'],
      datasets: [
        {
          data: [taskInProgress, taskPending, taskDone],
          backgroundColor: ['#0d8cd6', '#d6720d', '#0dd66e'],
          hoverBackgroundColor: ['#30a1e3', '#e3c230', '#30e374'],
          borderWidth: 0,
        },
      ],
    };
  }, [taskList]);

  return (
    <div className="w-3/4 h-3/4 max-w-68">
      <Pie data={data} options={options} />
    </div>
  );
}

export default TaskPieChart;
