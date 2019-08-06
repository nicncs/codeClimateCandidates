import { actionOrderDeleteOne, actionOrderUpsertOne } from './order.actions';

describe('Books Actions', () => {
  it('should create ActionOrderUpsertOne action', () => {
    const action = actionOrderUpsertOne({
      order: {
        id: 1,
        paymentId: 1,
        state: 'verified',
        quantity: 12,
        totalPrice: 12000000
      }
    });
    expect(action.type).toEqual(actionOrderUpsertOne.type);
    expect(action.order).toEqual(
      jasmine.objectContaining({
        id: 1,
        paymentId: 1,
        state: 'verified',
        quantity: 12,
        totalPrice: 12000000
      })
    );
  });

  it('should create ActionOrderDeleteOne action', () => {
    const action = actionOrderDeleteOne({ id: 1 });
    expect(action.type).toEqual(actionOrderDeleteOne.type);
    expect(action.id).toEqual(1);
  });
});
