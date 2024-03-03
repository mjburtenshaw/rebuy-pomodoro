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

export type CreateTimerOp = {
  data: {
    timer: Timer;
  };
};

export type ListTimersOp = {
  data: {
    timers: Timer[];
  };
};

export type StagedTimer = {
  startTime: Date;
  taskId: string | null;
  timerTypeId: string;
};
