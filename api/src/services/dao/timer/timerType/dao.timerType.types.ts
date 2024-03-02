export type ListTimerTypesOp = {
  data: {
    timerTypes: Array<{
      created_at: Date;
      deleted_at: Date | null;
      duration: number;
      id: string;
      label: string;
      sound_type_id: string;
      updated_at: Date;
      version: string;
    }>;
  };
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
