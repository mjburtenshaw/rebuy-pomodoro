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

export type ListTimerTypesOp = {
  data: {
    timerTypes: TimerType[];
  };
};
