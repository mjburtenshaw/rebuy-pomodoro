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
