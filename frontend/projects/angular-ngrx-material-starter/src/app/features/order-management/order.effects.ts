import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService } from '../../core/core.module';

import { State } from './examples.state';
import { actionOrderDeleteOne, actionOrderUpsertOne } from './order.actions';
import { selectOrder } from './order.selectors';

export const BOOKS_KEY = 'ORDERS';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  persistOrder = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionOrderUpsertOne, actionOrderDeleteOne),
        withLatestFrom(this.store.pipe(select(selectOrder))),
        tap(([actions, orderState]) =>
          this.localStorageService.setItem(BOOKS_KEY, orderState)
        )
      ),
    { dispatch: false }
  );
}
