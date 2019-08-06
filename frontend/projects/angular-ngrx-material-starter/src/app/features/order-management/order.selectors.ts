import { createSelector } from '@ngrx/store';

import { selectRouterState } from '../../core/core.module';
import { selectExamples, ExamplesState } from './examples.state';

import { orderAdapter } from './order.reducer';

const { selectEntities, selectAll } = orderAdapter.getSelectors();

export const selectOrder = createSelector(
  selectExamples,
  (state: ExamplesState) => state.orders
);

export const selectAllOrders = createSelector(
  selectOrder,
  selectAll
);
export const selectOrderEntities = createSelector(
  selectOrder,
  selectEntities
);

export const selectSelectedOrder = createSelector(
  selectOrderEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
);
