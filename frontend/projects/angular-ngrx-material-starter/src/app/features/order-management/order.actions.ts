import { createAction, props } from '@ngrx/store';
import { Order } from './order.model';

export const actionOrderUpsertOne = createAction(
  '[Orders] Upsert One',
  props<{ order: Order }>()
);

export const actionOrderDeleteOne = createAction(
  '[Orders] Delete One',
  props<{ id: number }>()
);
