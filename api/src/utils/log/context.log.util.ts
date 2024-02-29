import { v4 as uuidv4 } from 'uuid';

type ContextOptions = {
  data?: Record<string, any>;
  parentCtx?: Context;
};

export class Context {
  constructor(label: string, options?: ContextOptions) {
    this._context = {};
    this.add(label, options);
  }

  private _context: Record<string, any>;

  get() {
    return this._context;
  }

  add(label: string, options?: ContextOptions) {
    let data = options?.data || {};
    let parentCtx = options?.parentCtx?.get() || {};
    this._context = {
      ...this._context,
      ...parentCtx,
      [label]: {
        ...data,
        id: uuidv4(),
      },
    };
  }
}
