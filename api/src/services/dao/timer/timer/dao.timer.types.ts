export type ListTimersOp = {
  data: {
    timers: Array<{
      created_at: Date;
      deleted_at: Date | null;
      end_time: Date | null;
      id: string;
      start_time: Date;
      task_id: string;
      timer_type_id: string;
      updated_at: Date;
      version: string;
    }>;
  };
};

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
