import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Order, OrderState } from './order.model';
import { actionOrderDeleteOne, actionOrderUpsertOne } from './order.actions';
import { Action, createReducer, on } from '@ngrx/store';

export function sortByState(a: Order, b: Order): number {
  return a.state.localeCompare(b.state);
}

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  sortComparer: sortByState
});

export const initialState: OrderState = orderAdapter.getInitialState({
  ids: [1],
  entities: {
    1: {
      id: 1,
      paymentId: 1,
      state: 'verified',
      quantity: 12,
      totalPrice: 12000000
    }
  }
});

const reducer = createReducer(
  initialState,
  on(actionOrderUpsertOne, (state, { order }) =>
    orderAdapter.upsertOne(order, state)
  ),
  on(actionOrderDeleteOne, (state, { id }) => orderAdapter.removeOne(id, state))
);

export function orderReducer(state: OrderState | undefined, action: Action) {
  return reducer(state, action);
}
