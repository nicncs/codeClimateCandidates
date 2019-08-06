import { EntityState } from '@ngrx/entity';

export interface Order {
  id: number;
  paymentId: number;
  state: string;
  quantity: number;
  totalPrice: number;
}

export interface OrderState extends EntityState<Order> {}
