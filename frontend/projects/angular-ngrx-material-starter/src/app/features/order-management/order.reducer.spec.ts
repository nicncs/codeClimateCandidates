import { OrderState } from './order.model';
import { orderReducer, initialState } from './order.reducer';
import { actionOrderDeleteOne, actionOrderUpsertOne } from './order.actions';

describe('orderReducer', () => {
  const TEST_INITIAL_STATE: OrderState = {
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
  };

  it('should return the default state', () => {
    const action = {} as any;
    const state = orderReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should add a book', () => {
    const action = actionOrderUpsertOne({
      order: {
        id: 1,
        paymentId: 1,
        state: 'verified',
        quantity: 12,
        totalPrice: 12000000
      }
    });
    const state = orderReducer(TEST_INITIAL_STATE, action);

    expect(state.ids.length).toEqual(1);
    expect(state.entities[1].state).toEqual('verified');
  });

  it('should update a book', () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = actionOrderUpsertOne({
      order: {
        id: 1,
        paymentId: 1,
        state: 'verified',
        quantity: 12,
        totalPrice: 12000000
      }
    });

    const state = orderReducer(TEST_INITIAL_STATE, action);
    expect(state.entities[id]).toEqual(
      jasmine.objectContaining({
        title: 'updated',
        author: 'updated',
        description: 'updated'
      })
    );
  });

  it('should remove a book', () => {
    const id = TEST_INITIAL_STATE.ids[0] as string;
    const action = actionOrderDeleteOne({ id });
    const state = orderReducer(TEST_INITIAL_STATE, action);
    expect(state.entities[id]).toBe(undefined);
  });
});
