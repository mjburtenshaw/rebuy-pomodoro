export type StagedTimer = {
  startTime: Date;
  taskId: string | null;
  timerTypeId: string;
};

export type Timer = {
  createdAt: string;
  deletedAt: string | null;
  endTime: string | null;
  id: string;
  startTime: string;
  taskId: string | null;
  timerTypeId: string;
  updatedAt: string;
  version: string;
};

export type TimerType = {
  createdAt: string;
  deletedAt: string | null;
  duration: number;
  id: string;
  label: string;
  soundTypeId: string;
  updatedAt: string;
  version: string;
};
