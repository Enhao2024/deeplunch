import {
  Task, TaskImportance, TaskPriority, TaskStatus,
} from '@/types/common';
import { useMemo } from 'react';

interface Props {
  taskList: Task[],
}

type ProgressData = {
  total: number,
  done: number,
};

type ProgressMeta = {
  importantUrgent: ProgressData,
  optionalUrgent: ProgressData,
  importantWaitable: ProgressData,
  optionalWaitable: ProgressData,
};

function TaskProgress({ taskList }: Props) {
  const progress = useMemo(() => {
    const data: ProgressMeta = {
      importantUrgent: {
        total: 0,
        done: 0,
      },
      optionalUrgent: {
        total: 0,
        done: 0,
      },
      importantWaitable: {
        total: 0,
        done: 0,
      },
      optionalWaitable: {
        total: 0,
        done: 0,
      },
    };

    taskList.forEach((task) => {
      if (task.importance === TaskImportance.IMPORTANT && task.priority === TaskPriority.URGENT) {
        data.importantUrgent.total += 1;
        data.importantUrgent.done += task.status === TaskStatus.DONE ? 1 : 0;
      } else if (task.importance === TaskImportance.UNIMPORTANT && task.priority === TaskPriority.URGENT) {
        data.optionalUrgent.total += 1;
        data.optionalUrgent.done += task.status === TaskStatus.DONE ? 1 : 0;
      } else if (task.importance === TaskImportance.IMPORTANT && task.priority === TaskPriority.WAITABLE) {
        data.importantWaitable.total += 1;
        data.importantWaitable.done += task.status === TaskStatus.DONE ? 1 : 0;
      } else if (task.importance === TaskImportance.UNIMPORTANT && task.priority === TaskPriority.WAITABLE) {
        data.optionalWaitable.total += 1;
        data.optionalWaitable.done += task.status === TaskStatus.DONE ? 1 : 0;
      }
    });
    return data;
  }, [taskList]);

  const computePercent = (part: number, total: number) => 100 * (part / total);

  return (
    <div className="w-3/4 h-3/4 flex flex-col justify-start space-y-4 mt-2">

      <div>
        <p className="text-xs text-left font-semibold text-neutral-600 flex justify-between">
          <span>Important & Urgent</span>
          <span>{`${progress.importantUrgent.done}/${progress.importantUrgent.total}`}</span>
        </p>
        <progress className="progress" value={computePercent(progress.importantUrgent.done, progress.importantUrgent.total)} max="100" />
      </div>

      <div>
        <p className="text-xs text-left font-semibold text-neutral-600 flex justify-between">
          <span>Optional & Urgent</span>
          <span>{`${progress.optionalUrgent.done}/${progress.optionalUrgent.total}`}</span>
        </p>
        <progress className="progress" value={computePercent(progress.optionalUrgent.done, progress.optionalUrgent.total)} max="100" />
      </div>

      <div>
        <p className="text-xs text-left font-semibold text-neutral-600 flex justify-between">
          <span>Important & Waitable</span>
          <span>{`${progress.importantWaitable.done}/${progress.importantWaitable.total}`}</span>
        </p>
        <progress className="progress" value={computePercent(progress.importantWaitable.done, progress.importantWaitable.total)} max="100" />
      </div>

      <div>
        <p className="text-xs text-left font-semibold text-neutral-600 flex justify-between">
          <span>Optional & Waitable</span>
          <span>{`${progress.optionalWaitable.done}/${progress.optionalWaitable.total}`}</span>
        </p>
        <progress className="progress" value={computePercent(progress.optionalWaitable.done, progress.optionalWaitable.total)} max="100" />
      </div>

    </div>
  );
}

export default TaskProgress;
