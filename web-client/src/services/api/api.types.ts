export type Timer = {
  createdAt: Date;
  deletedAt: Date | null;
  endTime: Date | null;
  id: string;
  startTime: Date;
  taskId: string;
  timerTypeId: string;
  updatedAt: Date;
  version: string;
};

export type TimerType = {
  createdAt: Date;
  deletedAt: Date | null;
  duration: number;
  id: string;
  label: string;
  soundTypeId: string;
  updatedAt: Date;
  version: string;
};

