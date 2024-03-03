export type CreateTimerOp = {
  data: {
    timer: {
      created_at: Date;
      deleted_at: Date | null;
      end_time: Date | null;
      id: string;
      start_time: Date;
      task_id: string | null;
      timer_type_id: string;
      updated_at: Date;
      version: string;
    };
  };
};

export type ListTimersOp = {
  data: {
    timers: Array<{
      created_at: Date;
      deleted_at: Date | null;
      end_time: Date | null;
      id: string;
      start_time: Date;
      task_id: string | null;
      timer_type_id: string;
      updated_at: Date;
      version: string;
    }>;
  };
};

export type StagedTimer = {
  startTime: Date;
  taskId: string | null;
  timerTypeId: string;
};

export type Timer = {
  createdAt: Date;
  deletedAt: Date | null;
  endTime: Date | null;
  id: string;
  startTime: Date;
  taskId: string | null;
  timerTypeId: string;
  updatedAt: Date;
  version: string;
};
