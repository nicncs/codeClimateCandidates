import * as assert from 'assert';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../../core/core.module';

import { OrderState } from './order.model';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { OrderEffects, BOOKS_KEY } from './order.effects';
import { actionOrderDeleteOne, actionOrderUpsertOne } from './order.actions';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('OrderEffects', () => {
  describe('persistOrder', () => {
    const booksState: OrderState = {
      entities: {
        1: {
          id: 1,
          paymentId: 1,
          state: 'verified',
          quantity: 12,
          totalPrice: 12000000
        }
      },
      ids: [1]
    };
    let localStorage: LocalStorageService;
    let store: Store<any>;

    beforeEach(() => {
      localStorage = jasmine.createSpyObj('localStorage', ['setItem']);
      store = of({
        examples: {
          books: booksState
        }
      }) as any;
    });

    it('should not dispatch any actions', () => {
      const actions = new Actions(EMPTY);
      const effects = new OrderEffects(actions, store, localStorage);
      const metadata = getEffectsMetadata(effects);

      expect(metadata.persistOrder.dispatch).toEqual(false);
    });

    it('should call setItem on LocalStorageService for delete one action', () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const action = actionOrderDeleteOne({ id: 1 });
        const source = cold('a', { a: action });
        const actions = new Actions(source);
        const effects = new OrderEffects(actions, store, localStorage);

        effects.persistOrder.subscribe(() => {
          expect(localStorage.setItem).toHaveBeenCalledWith(
            BOOKS_KEY,
            booksState
          );
        });
      });
    });

    it('should call setItem on LocalStorageService for upsert one action', () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const action = actionOrderUpsertOne({ order: {} as any });
        const source = cold('a', { a: action });
        const actions = new Actions(source);
        const effects = new OrderEffects(actions, store, localStorage);

        effects.persistOrder.subscribe(() => {
          expect(localStorage.setItem).toHaveBeenCalledWith(
            BOOKS_KEY,
            booksState
          );
        });
      });
    });
  });
});
