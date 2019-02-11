import {Address} from './address';

export interface Entity {
  name: string,
  type: string,
  gst: string,
  billingAddress: Address,
  shippingAddress: Address,
  email: string,
  phone: string;
}
