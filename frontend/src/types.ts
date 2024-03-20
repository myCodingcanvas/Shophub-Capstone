export interface ICartItems {
  id: number;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  price?: number;
  qty?: number;
}

export interface ICart {
  cartItems: ICartItems[];
  shippingAddress: {};
  paymentMethod: string;
  itemsTotalPrice?: number;
  shippingTotalPrice?: number;
  taxTotalPrice?: number;
  totalFinalPrice?: number;
}
