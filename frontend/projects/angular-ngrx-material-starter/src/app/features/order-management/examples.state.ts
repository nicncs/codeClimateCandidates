import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { orderReducer } from './order.reducer';
import { OrderState } from './order.model';

export const FEATURE_NAME = 'orders';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  orders: orderReducer
};

export interface ExamplesState {
  orders: OrderState;
}

export interface State extends AppState {
  orders: OrderState;
  // examples: ExamplesState;
}
